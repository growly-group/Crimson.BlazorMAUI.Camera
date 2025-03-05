import { previewCamera } from "./methods/previewCamera.js";
import { takeVideoScreenshot } from "./methods/takeVideoScreenshot.js";

class CameraHandler {
    _containerId;
    _eventHandler;
    _video;

    constructor(containerId, eventHandler) {
        this._containerId = containerId;
        this._eventHandler = eventHandler;
    }

    async startPreview() {
        const results = await previewCamera(this._containerId);
        this._video = results.video;
        this._eventHandler("OnStartPreview");
    }

    async pausePreview() {
        this._video.pause();
    }

    async stopPreview() {
        document.querySelector(`#${containerId}`).innerHTML = "";
        document.querySelector(`#${containerId}`).innerHTML = "<video></video>";
    }

    takeScreenshot(mimeType = 'image/jpeg') {
        return takeVideoScreenshot(this._containerId, mimeType);
    }
}

globalThis.createCameraHandler = (containerId, eventHandler) => new CameraHandler(containerId, eventHandler);