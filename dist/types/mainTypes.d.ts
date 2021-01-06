import { UseableElements } from "./renderTypes";
export interface CaptchaInstance extends UseableElements {
    id?: string;
    displayTimeoutInstance?: number;
    intervalInstance?: number;
}
