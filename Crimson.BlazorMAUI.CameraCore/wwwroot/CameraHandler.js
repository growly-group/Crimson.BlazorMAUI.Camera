import { previewCamera } from "./methods/previewCamera.js";
import { takeVideoScreenshot } from "./methods/takeVideoScreenshot.js";

globalThis.cameraHandlers ??= {};
class CameraHandler {
    _containerId;
    _eventHandler;
    _eventHandlerAsync;
    _video;

    constructor(containerId, eventHandler, eventHandlerAsync) {
        this._containerId = containerId;
        this._eventHandler = eventHandler;
        this._eventHandlerAsync = eventHandlerAsync;
    }

    async startPreview() {
        const results = await previewCamera(this._containerId);
        this._video = results.video;
        this._eventHandler("OnStartPreview", this._containerId);
        this._eventHandlerAsync("OnStartPreviewAsync", this._containerId);
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

globalThis.createCameraHandler = (containerId, eventHandler) => {
    globalThis.cameraHandlers[containerId] = new CameraHandler(containerId, eventHandler); 
};