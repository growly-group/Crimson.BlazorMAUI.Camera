class CameraCoreFaultyItemError extends Error {
    constructor(message) {
        super(message);
        this.name = "CameraCoreFaultyItemError";
    }
}

export { CameraCoreFaultyItemError }