import { LinkDependencies } from "../types/renderTypes";

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
