declare global {
    interface Window {
        useNumCaptcha: () => Promise<boolean>;
    }
}
export {};
