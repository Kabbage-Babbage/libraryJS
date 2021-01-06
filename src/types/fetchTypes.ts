type Status = "success" | "failed";

interface StringResponse {
	S: string;
}
export interface ImageRequest {
	imageString: StringResponse;
	id: StringResponse;
}

export interface Image {
	image: string;
	id: string;
}

export type Params = {
	[key: string]: string;
};
