namespace Crimson.BlazorMAUI.CameraCore
{
    public static class DataConsts
    {
        public static string EmptyCameraViewContent(string cameraViewId)
        {
            return $"<div id=\"{cameraViewId}\"><video></video></div>";
        }
    }
}
