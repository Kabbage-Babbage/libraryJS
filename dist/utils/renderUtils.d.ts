import { LinkDependencies, CreatableClasses, CreatableElements } from "../types/renderTypes";
export declare const linkDependencies: LinkDependencies[];
export declare const inputType: string;
export declare const placeHolder: string;
export declare function addChild(parent: HTMLElement, elementType: CreatableElements, classList?: CreatableClasses[]): HTMLElement;
export declare function addClass(element: HTMLElement | Element, classList: CreatableClasses[]): void;
export declare function removeClass(element: HTMLElement | Element, classList: CreatableClasses[]): void;
export declare function removeAllClass(element: HTMLElement): void;
