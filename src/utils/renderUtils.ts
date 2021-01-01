import {
	LinkDependencies,
	CreatableClasses,
	CreatableElements,
} from "../types/renderTypes";

export const linkDependencies: LinkDependencies[] = [
	{
		rel: "stylesheet",
		href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
		integrity:
			"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
		crossorigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href:
			"https://stackpath.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",
		integrity:
			"sha384-X7L1bhgb36bF1iFvaqvhgpaGpayKM+vXNNYRlF89BFA5s3vi1qZ8EX9086RlZjy1",
		crossorigin: "anonymous",
	},
];

export const inputType: string = "text";
export const placeHolder: string = "Type the answer.";

export function addChild(
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

export function addClass(
	element: HTMLElement | Element,
	classList: CreatableClasses[]
): void {
	element.classList.add(...classList);
}

export function removeClass(
	element: HTMLElement | Element,
	classList: CreatableClasses[]
): void {
	element.classList.remove(...classList);
}

export function removeAllClass(element: HTMLElement): void {
	const currentClasses = element.classList;
	element.classList.remove(...currentClasses);
}
