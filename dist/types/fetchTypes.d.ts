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
export declare type Params = {
    [key: string]: string;
};
export {};
