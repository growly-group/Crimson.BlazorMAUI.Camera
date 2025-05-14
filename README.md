# 📷 Crimson Hybrid MAUI Camera
 
Crimson Hybrid MAUI camera is a tool focused in providing video and audio functionalities to MAUI webbrowser-based applications.

# 🎯 Features

- **JavaScript methods**
    - **createCameraHandler(CameraOptions)**
    - **CameraHandler**
        - **takePicture(mimeType?)** byte[]
        - **startRecording(id?)** string
        - **stopRecording(id)** void

- take picture can be configured to take a specific predefined square coordinate to take a cropped picture 
- maybe start recording can target a specific stream or create a Video class instance to allow multiple targets with multi threading
- start video preview can actually start the real video preview in the component, stop video preview will also stop all recordings/streams
- start video recording needs to be different from start audio recording? Maybe it can be two different components and I can pass a MicrophoneHandler
- I can have VideoHandler and AudioHandler as base classes so I can create ScreenHandler, CameraHandler, DeviceAudioHandler and MicrophoneHandler, it can also be extended to ExternalVideoSourceHandler and ExternalAudioSourceHandler to explore streaming capabilities


# Installation

The package core can be installed through [Nuget](#soon) with the following command:

```bash
[soon]
```

The core package **may** work fine if you are targetting only Windows platforms, but additional assemblies are needed if you are trying to target other platforms
such as Android, IOS and MacOS:


Android:
```bash
[soon]
```

IOS:
```bash
[soon]
```

MacOS:
```bash
[soon]
```

# Basic usage

The package comes with separated tools and visual components that can be used together or independently, below there is a list of all the available features
that can be used in the [current version](#soon) of the library:

- **Visual Components**
	- CameraRecorder
- **Tools**
	- CameraHandler

# Todo and future

These features are planned to be released in future versions:

- [ ] Recording videos with `CameraRecorder` and exporting to common codecs;
- [ ] Recording audios with `AudioRecorder` and exporting to common audio types;
- [ ] Record user screen with `ScreenRecorder` and exporting to common image types or video codecs;



