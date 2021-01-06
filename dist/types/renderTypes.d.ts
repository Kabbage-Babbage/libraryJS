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
    form: HTMLFormElement;
    status: HTMLElement;
}
export declare type CreatableElements = "div" | "i" | "img" | "input" | "form";
export declare type CreatableClasses = "captcha-image" | "captcha-reload" | "fa" | "fa-redo" | "fa-spin" | "fa-circle-o-notch" | "fa-check" | "fa-times" | "captcha-content" | "captcha-header" | "captcha-logo" | "captcha-body" | "captcha-input" | "captcha-status" | "captcha-form" | "hidden" | "blur";
export declare type Status = "success" | "failed" | "pending";
