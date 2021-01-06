import {
	useInitialRender,
	hide,
	show,
	blur,
	unblur,
	disable,
	enable,
	clearInput,
	updateImage,
	updateStatus,
} from "./lib/render";
import { getCaptcha } from "./lib/fetch";
import { CaptchaInstance } from "./types/mainTypes";
import { submitCaptcha } from "./lib/fetch";
import { Status } from "./types/renderTypes";

const forcedReloadTime: number = 15000;
const errorThreshold: number = 3;

async function reloadCaptcha(
	captcha: CaptchaInstance
): Promise<CaptchaInstance> {
	captcha = restartIntervalInstance(captcha);

	blur(captcha.image);
	updateStatus(captcha.status, "pending");

	try {
		const { image, id } = await getCaptcha();
		captcha.id = id;
		updateImage(captcha.image, image);
	} catch (err) {
		// show alt message when error getting Captcha
		unblur(captcha.image);
	}

	unblur(captcha.image);
	clearInput(captcha.input);
	enable(captcha.input);
	hide(captcha.reload);

	captcha.displayTimeoutInstance = setTimeout(() => {
		// show reload button after 5 seconds of inactivity.
		show(captcha.reload);
	}, 5000);

	return captcha;
}

function restartIntervalInstance(captcha: CaptchaInstance): CaptchaInstance {
	// we need to stop current interval to prevent race condition
	if (captcha.intervalInstance) {
		clearInterval(captcha.intervalInstance);
	}

	captcha.intervalInstance = setInterval(async () => {
		captcha = await reloadCaptcha(captcha);
	}, forcedReloadTime);

	return captcha;
}

function endCaptcha(captcha: CaptchaInstance, status: Status): void {
	if (captcha.intervalInstance) {
		clearInterval(captcha.intervalInstance);
	}

	updateStatus(captcha.status, status);
	hide(captcha.reload.children[0]);
}

function useNumCaptcha(): Promise<boolean> {
	return new Promise(async (resolve, reject) => {
		let instance: CaptchaInstance = useInitialRender();
		let errorCount: number = 0;

		instance = await reloadCaptcha(instance);

		// add required event listeners
		instance.form.addEventListener("submit", (e) => {
			const check = instance.input.value;
			if (instance.id && !!check) {
				disable(instance.input);

				// prevent setTimeout from firing.
				clearTimeout(instance.displayTimeoutInstance);

				submitCaptcha(instance.id, check).then(
					() => {
						endCaptcha(instance, "success");
						resolve(true);
						return;
					},
					() => {
						errorCount++;

						if (errorCount >= errorThreshold) {
							endCaptcha(instance, "failed");
							reject(false);
							return;
						}

						updateStatus(instance.status, "failed");
						show(instance.reload);
					}
				);
			}
			e.preventDefault();
		});

		instance.reload.addEventListener("click", async () => {
			instance = await reloadCaptcha(instance);
		});
	});
}

// export to global window object
declare global {
	interface Window {
		useNumCaptcha: () => Promise<boolean>;
	}
}

window.useNumCaptcha = useNumCaptcha;
