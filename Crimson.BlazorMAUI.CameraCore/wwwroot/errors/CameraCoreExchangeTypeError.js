class CameraCoreExchangeTypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "CameraCoreExchangeTypeError";
    }
}

export { CameraCoreExchangeTypeError }