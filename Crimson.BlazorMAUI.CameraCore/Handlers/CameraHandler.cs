using Microsoft.JSInterop;

namespace Crimson.BlazorMAUI.CameraCore.Handlers
{
    public class CameraHandler
    {
        public string? CameraViewId { get; }
        public List<CameraSnapshot>? Snapshots { get; }
        public Func<string, object?, Task>? OnEvent { get; set; }

        private readonly IJSRuntime _jsRuntime;

        public CameraHandler(string? cameraViewId, IJSRuntime jsRuntime)
        {
            CameraViewId = cameraViewId;
            _jsRuntime = jsRuntime;
            Snapshots = [];
        }

        public async Task<CameraSnapshot> TakePicture(string imageType = "image/jpeg")
        {
            var actionResult = await _jsRuntime.InvokeAsync<string>($@"
                    const cameraView = document.getElementById(""{CameraViewId}"");
                    const video = cameraView?.getElementsByTagName(""video"")[0];
                    if (video) {{
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const context = canvas.getContext('2d');
                        context.drawImage(video, 0, 0, canvas.width, canvas.height);
                        return canvas.toDataURL('image/jpeg');
                    }}
                    return null;
                ") ?? throw new Exception("Failed to take picture: Camera view not found or no video stream.");

            var snapshot = new CameraSnapshot
            {
                Image = Convert.FromBase64String(actionResult.Split(',')[1]),
                ImageType = imageType,
                CapturedAt = DateTimeOffset.UtcNow
            };

            Snapshots?.Add(snapshot);

            if (OnEvent != null)
            {
                await OnEvent.Invoke("OnTakePicture", snapshot);
            }

            return snapshot;
        }

        public async Task<CameraSnapshot?> GetLastPicture()
        {
            var lastPicture = Snapshots?.LastOrDefault();

            if (OnEvent != null)
            {
                await OnEvent.Invoke("OnGetLastPicture", lastPicture);
            }

            return lastPicture;
        }

        public async Task ClearPictures()
        {
            Snapshots?.Clear();
            if (OnEvent != null)
            {
                await OnEvent.Invoke("OnClearPictures", null);
            }
        }

        public async Task Preview(string facingMode = "user")
        {
            var actionResult = await _jsRuntime.InvokeAsync<string>($@"
                    const cameraView = document.getElementById(""{CameraViewId}"");
                    const video = cameraView?.getElementsByTagName(""video"")[0];
                    if (video) {{
                        const stream = await navigator.mediaDevices.getUserMedia({{ video: {{ facingMode: ""{facingMode}"" }} }});
                        video.srcObject = stream;
                        video.play();
                        return ""OK""; 
                    }}

                    return ""Camera view not found"";
                ");

            if (actionResult != "OK")
            {
                throw new Exception($"Failed to start camera preview: {actionResult}");
            }

            if (OnEvent != null)
            {
                await OnEvent.Invoke("OnStartPreview", null);
            }
        }

        public async Task Stop()
        {
            var actionResult = await _jsRuntime.InvokeAsync<string>($@"
                    const cameraView = document.getElementById(""{CameraViewId}"");
                    const video = cameraView?.getElementsByTagName(""video"")[0];
                    if (video) {{
                        const stream = video.srcObject;
                        if (stream) {{
                            const tracks = stream.getTracks();
                            tracks.forEach(track => track.stop());
                            video.srcObject = null;
                        }}
                        return ""OK""; 
                    }}
                    return ""Camera view not found"";
                ");

            if (actionResult != "OK")
            {
                throw new Exception($"Failed to stop camera preview: {actionResult}");
            }

            if (OnEvent != null)
            {
                await OnEvent.Invoke("OnStopPreview", null);
            }
        }
    }

    public class CameraSnapshot
    {
        public byte[]? Image { get; set; }
        public string? ImageType { get; set; }
        public DateTimeOffset CapturedAt { get; set; }
    }
}
