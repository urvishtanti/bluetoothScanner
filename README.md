# Bluetooth Scanner App

A simple bluetooth scanner app which scans low energy bluetooth nearby, advertising bluetooth devices. This app also contains a refresh button which would update the existing list if a new device is found.

It's made with React Native, coupling with the libraries which were needed to achieve the goal.

Note: This app was made using Windows OS and was tested on android emulator only.

## Preview

![preview](https://user-images.githubusercontent.com/66725206/156057739-faeb2197-d0d1-4047-8f20-c654b094bf8d.gif)

## Tech Stack

**[React Native](https://github.com/facebook/react-native)**

- A framework for building native apps with React.

**[React Native Ble Manager](https://www.npmjs.com/package/react-native-ble-manager)**

- React Native BLE communication module.

**[React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)**

- A library used for integration of Icons in the app.

## Folder Structure

This template follows a very simple project structure:

- `module`:This folder is the main container of all the code inside your application.
  - `const`: Folder to store any kind of constant that you have.
  - `screen`:Folder that contains your application screen/feature.
    - `component`: Folder that contains the components used in that screen.
  - `services`: This folder contains BLE services.
  - `utils`: This folder contains the permission util.

## Installation

Clone this project with the help of git clone or download zip file.

```
git clone <git-repository url>
```

Install the dependencies with the help of npm

```
  npm i or npm install
```

Launch android emulator using run-android

```
 react-native run-android
```
