class CameraCoreMIMETypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "CameraCoreMIMETypeError";
    }
}

export { CameraCoreMIMETypeError }