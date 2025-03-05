import { CameraCoreFaultyItemError } from '../errors/CameraCoreFaultyItemError.js';

async function previewCamera(cameraViewId, facingMode = "user") {
    const cameraView = document.getElementById(cameraViewId);
    const video = cameraView?.getElementsByTagName("video")[0];

    if (!cameraView || !video) {
        throw new CameraCoreFaultyItemError("The expected item is corrupted, null or could not be found.");
    }

    return navigator
        .mediaDevices
        .getUserMedia({ video: { facingMode } })
        .then(function (stream) {
            video.srcObject = stream;
            const playPromise = video.play(); 
            return { stream, playPromise, video };
        });
}

export { previewCamera }