type Status = "success" | "failed";

export interface Image {
	image: string;
	id: string;
}

export interface ImageRequest extends Image {
	status: Status;
}

export interface AuthRequest {
	status: Status;
}

export type Params = {
	[key: string]: string;
};
