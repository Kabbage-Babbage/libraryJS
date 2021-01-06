import { ImageRequest, Image, AuthRequest, Params } from "../types/fetchTypes";

const apiEndpoint = "http://localhost:3000";

export async function getCaptcha(): Promise<Image> {
	const response = await fetch("http://localhost:3000");

	if (!response.ok) {
		throw new Error("something went wrong..");
	}

	// type assertion to ImageRequest
	const { id, image } = <ImageRequest>await response.json();

	return {
		id,
		image: `data:image/png;base64,${image}`,
	};
}

export async function submitCaptcha(
	id: string,
	check: string
): Promise<AuthRequest> {
	const url = new URL(`${apiEndpoint}/images`);
	const params: Params = {
		id,
		check,
	};

	Object.keys(params).forEach((key: string) =>
		url.searchParams.append(key, params[key])
	);

	const response = await fetch(url.toString(), {
		method: "POST",
	});

	if (!response.ok) {
		throw new Error(response.status.toString());
	}

	return await response.json();
}
