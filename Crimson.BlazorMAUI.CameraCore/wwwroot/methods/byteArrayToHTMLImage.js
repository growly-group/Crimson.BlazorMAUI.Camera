import { CameraCoreExchangeTypeError } from '../errors/CameraCoreExchangeTypeError.js';
import { CameraCoreMIMETypeError } from '../errors/CameraCoreMIMETypeError.js';

function byteArrayToHTMLImage(byteArray, imageMimeType = 'image/jpeg') {
    if (!Array.isArray(byteArray)) {
        throw new CameraCoreExchangeTypeError("The expected format for the byte array was wrong.");
    }

    if (!imageMimeType.startsWith('image/')) {
        throw new CameraCoreMIMETypeError("The expected format for the MIME type was wrong.");
    }

    const blob = new Blob([byteArray], { type: imageMimeType });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;

    return img;
}

export { byteArrayToHTMLImage }