import { CameraCoreMIMETypeError } from '../errors/CameraCoreExchangeTypeError.js';
import { CameraCoreFaultyItemError } from '../errors/CameraCoreFaultyItemError.js';

function takeVideoScreenshot(cameraViewId, imageMimeType = 'image/jpeg') {
    if (!imageMimeType.startsWith('image/')) {
        throw new CameraCoreMIMETypeError("The expected format for the MIME type was wrong.");
    }

    const cameraView = document.getElementById(cameraViewId);
    const video = cameraView?.getElementsByTagName("video")[0];

    if (!cameraView || !video) {
        throw new CameraCoreFaultyItemError("The expected item is corrupted, null or could not be found.");
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL(imageMimeType);

    // Removing the header from the base64 url that is obtained from the
    // 'toDataURL' method from canvas
    return data.substring(23);
}

export { takeVideoScreenshot }