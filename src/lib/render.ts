import { cssStyles } from "../styles";
import {
	CreatableElements,
	CreatableClasses,
	UseableElements,
} from "../types/renderTypes";
import { linkDependencies, inputType, placeHolder } from "../utils/renderUtils";

const designatedId: string = "captcha-wrapper";

function addChild(
	parent: HTMLElement,
	elementType: CreatableElements,
	classList?: CreatableClasses[]
): HTMLElement {
	const created: HTMLElement = document.createElement(elementType);
	parent.appendChild(created);
	if (classList) {
		addClass(created, classList);
	}
	return created;
}

function addClass(element: HTMLElement, classList: CreatableClasses[]): void {
	classList.forEach((currentClass) => {
		element.classList.add(currentClass);
	});
}

function removeClass(
	element: HTMLElement,
	classList: CreatableClasses[]
): void {
	classList.forEach((currentClass) => {
		element.classList.remove(currentClass);
	});
}

function useDependencies(): void {
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
	// TODO: replace with non-hardcoded value.
	image.src =
		"https://cdn.discordapp.com/attachments/790469331402096660/790469909834235924/unknown.png";

	const reload = <HTMLDivElement>(
		addChild(imageWrapper, "div", ["captcha-reload"])
	);
	addChild(reload, "i", ["fa", "fa-redo", "hidden"]);

	const contentWrapper = addChild(wrapper, "div", ["captcha-content"]);
	const contentHeader = addChild(contentWrapper, "div", ["captcha-header"]);
	const contentBody = addChild(contentWrapper, "div", ["captcha-body"]);

	const contentLogo = <HTMLImageElement>(
		addChild(contentHeader, "img", ["captcha-logo"])
	);
	contentLogo.src = "./static/logo.png";

	const input = <HTMLInputElement>(
		addChild(contentBody, "input", ["captcha-input"])
	);
	input.placeholder = placeHolder;
	input.type = inputType;

	const statusWrapper = addChild(contentBody, "div", ["captcha-status"]);
	const status = addChild(statusWrapper, "i", [
		"fa",
		"fa-circle-o-notch",
		"fa-spin",
	]);

	return {
		image,
		reload,
		input,
		status,
	};
}

export function render(): void {
	const wrapper: HTMLElement | null = document.getElementById(designatedId);

	if (!wrapper) {
		throw new Error(
			"Please create a <div> tag with the id of 'captcha-wrapper'"
		);
		return;
	}

	useDependencies();
	useDefaultStyleSheet();
	useDefaultStructure(wrapper);
}
