export interface LinkDependencies {
	rel: string;
	href: string;
	integrity: string;
	crossorigin: string;
}
export interface UseableElements {
	image: HTMLImageElement;
	reload: HTMLDivElement;
	input: HTMLInputElement;
	status: HTMLElement;
}

export type CreatableElements = "div" | "i" | "img" | "input";
export type CreatableClasses =
	| "captcha-image"
	| "captcha-reload"
	| "fa"
	| "fa-redo"
	| "fa-spin"
	| "fa-circle-o-notch"
	| "fa-check"
	| "fa-times"
	| "captcha-content"
	| "captcha-header"
	| "captcha-logo"
	| "captcha-body"
	| "captcha-input"
	| "captcha-status"
	| "hidden"
	| "blur";
