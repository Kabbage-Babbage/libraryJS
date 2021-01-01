import { ImageRequest, Image, AuthRequest } from "../types/fetchTypes";

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
	const response = await fetch("http://localhost:3000/images", {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({ id, check }),
	});

	if (!response.ok) {
		throw new Error(response.status.toString());
	}

	return await response.json();
}
