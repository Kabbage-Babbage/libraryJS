import { Image, AuthRequest } from "../types/fetchTypes";
export declare function getCaptcha(): Promise<Image>;
export declare function submitCaptcha(id: string, check: string): Promise<AuthRequest>;
