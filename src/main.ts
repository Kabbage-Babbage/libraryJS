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
import { CaptchaInstance } from "./types/renderTypes";
import { submitCaptcha } from "./lib/fetch";

// declare global {
// 	interface Window {
// 		render: () => Promise<number>;
// 		// FIXME: replace type any with proper type
// 	}
// }

// window.render = render;

async function reloadCaptcha(
	captcha: CaptchaInstance
): Promise<CaptchaInstance> {
	console.log("reloading...");
	blur(captcha.image);

	const { image, id } = await getCaptcha();
	captcha.id = id;
	updateImage(captcha.image, image);
	updateStatus(captcha.status, "pending");

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

async function useNumCaptcha(): Promise<void> {
	let instance = useInitialRender();

	instance = await reloadCaptcha(instance);

	const reloadInstance = setInterval(async () => {
		instance = await reloadCaptcha(instance);
	}, 10000);

	// add required event listeners
	instance.form.addEventListener("submit", (e) => {
		const check = instance.input.value;
		if (instance.id && !!check) {
			disable(instance.input);

			// prevent setTimeout from firing.
			clearTimeout(instance.displayTimeoutInstance);

			submitCaptcha(instance.id, check).then(
				(response) => {
					console.log(response);
					clearInterval(reloadInstance);
					updateStatus(instance.status, "success");
					hide(instance.reload.children[0]);
				},
				(error) => {
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
}

useNumCaptcha();
