# 📷 Crimson Blazor/Hybrid MAUI Camera
 
Crimson BHMC is a library focused on providing easy-to-use tools to properly integrate camera features in *almost* any Blazor and Blazor Hybrid (MAUI) application.
The library comes with the main component to visually preview a camera, take pictures, record audio and videos and a set of toools to
externally work on it. It is designed to work without any additional setup - taking care of platform-specific permissions and providing
ways to make beautiful workarounds in case anything happens.

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
	- \<CameraView> 
	- \<AudioView>
	- \<ScreenView>
	- \<MediaController>
- **Tools**
	- HeadlessCamera
	- HeadlessAudio
	- HeadlessScreen
	- CameraHandler
	- AudioHandler