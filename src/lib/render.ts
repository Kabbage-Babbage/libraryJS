import { cssStyles } from "../styles";
import { UseableElements, CaptchaInstance, Status } from "../types/renderTypes";
import {
	linkDependencies,
	inputType,
	placeHolder,
	addChild,
	addClass,
	removeClass,
	removeAllClass,
} from "../utils/renderUtils";
import { getCaptcha } from "./fetch";

const designatedId: string = "captcha-wrapper";

function useStyleDependencies(): void {
	linkDependencies.forEach((dependency) => {
		const link = document.createElement("link");
		link.rel = dependency.rel;
		link.href = dependency.href;
		link.integrity = dependency.integrity;
		link.crossOrigin = dependency.crossorigin;
		document.head.appendChild(link);
	});
}

function useDefaultStyleSheet(): void {
	const style: HTMLStyleElement = document.createElement("style");
	document.head.appendChild(style);
	cssStyles.forEach((cssStyle) => {
		style.sheet!.insertRule(cssStyle);
	});
}

function useDefaultStructure(wrapper: HTMLElement): UseableElements {
	//hard coded for easier job
	const imageWrapper = addChild(wrapper, "div", ["captcha-image"]);
	const image = <HTMLImageElement>addChild(imageWrapper, "img");
	image.alt = "Something went wrong :(";

	const reload = <HTMLDivElement>(
		addChild(imageWrapper, "div", ["captcha-reload", "hidden"])
	);
	addChild(reload, "i", ["fa", "fa-redo"]);

	const contentWrapper = addChild(wrapper, "div", ["captcha-content"]);
	const contentHeader = addChild(contentWrapper, "div", ["captcha-header"]);
	const contentBody = addChild(contentWrapper, "div", ["captcha-body"]);

	const contentLogo = <HTMLImageElement>(
		addChild(contentHeader, "img", ["captcha-logo"])
	);
	contentLogo.src = "https://numcaptcha.s3.amazonaws.com/static/logo.png";

	const form = <HTMLFormElement>addChild(contentBody, "form", ["captcha-form"]);
	const input = <HTMLInputElement>addChild(form, "input", ["captcha-input"]);
	input.placeholder = placeHolder;
	input.type = inputType;

	const statusWrapper = addChild(contentBody, "div", ["captcha-status"]);
	const status = addChild(statusWrapper, "i", ["fa"]);

	return {
		image,
		reload,
		input,
		form,
		status,
	};
}

function useInitialRender(): CaptchaInstance {
	const wrapper: HTMLElement | null = document.getElementById(designatedId);

	if (!wrapper) {
		throw new Error(
			"Please create a <div> tag with the id of 'captcha-wrapper'"
		);
	}

	if (wrapper.children.length > 0) {
		throw new Error("Please remove contents within <div> tag");
	}

	useStyleDependencies();
	useDefaultStyleSheet();

	return useDefaultStructure(wrapper);
}

function hide(element: HTMLElement | Element): void {
	addClass(element, ["hidden"]);
}

function show(element: HTMLElement | Element): void {
	if (element.classList.contains("hidden")) {
		removeClass(element, ["hidden"]);
	}
}

function blur(element: HTMLImageElement): void {
	addClass(element, ["blur"]);
}

function unblur(element: HTMLImageElement): void {
	if (element.classList.contains("blur")) {
		removeClass(element, ["blur"]);
	}
}

function disable(element: HTMLInputElement): void {
	element.setAttribute("disabled", "");
}

function enable(element: HTMLInputElement): void {
	element.removeAttribute("disabled");
}

function clearInput(element: HTMLInputElement): void {
	element.value = "";
}

function updateImage(element: HTMLImageElement, image: string): void {
	element.src = image;
}

function updateStatus(element: HTMLElement, status: Status): void {
	removeAllClass(element);
	switch (status) {
		case "success":
			addClass(element, ["fa", "fa-check"]);
			break;
		case "failed":
			addClass(element, ["fa", "fa-times"]);
			break;
		default:
			addClass(element, ["fa", "fa-circle-o-notch", "fa-spin"]);
	}
}

export {
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
};
