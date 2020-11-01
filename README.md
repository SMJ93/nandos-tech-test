# Nandos React Native Coding Challenge 🐔

## Task

Read a list of restaurants from a remote location and display these restaurants in a list view.

We’re looking for a production-quality approach to the project structure and code that you would be happy handing over to another team of developers.

## Requirements

- The JSON must be read remotely - no copying down the JSON to a local store!
- Please display the name and address information returned for each restaurant
- Please use the URL property to make the restaurant name open a web view or native browser

## Further Information

Location of restaurant JSON: https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json

# Implementation

## Environment 🌳

Set up your machine to run react-native CLI (not expo). See [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) for more details.

Once setup, if you run `npx react-native-info`, you should see something like this:

```
System:
    OS: macOS 10.15.7
    CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz
    Memory: 2.61 GB / 16.00 GB
    Shell: 5.7.1 - /bin/zsh
  Binaries:
    Node: 12.9.1 - ~/.nvm/versions/node/v12.9.1/bin/node
    Yarn: 1.22.10 - ~/.nvm/versions/node/v12.9.1/bin/yarn
    npm: 6.14.4 - ~/.nvm/versions/node/v12.9.1/bin/npm
    Watchman: Not Found
  Managers:
    CocoaPods: 1.9.1 - /usr/local/bin/pod
  SDKs:
    iOS SDK:
      Platforms: iOS 14.1, DriverKit 19.0, macOS 10.15, tvOS 14.0, watchOS 7.0
    Android SDK:
      API Levels: 23, 25, 26, 27, 28, 29
      Build Tools: 28.0.3, 29.0.2
      System Images: android-29 | Google APIs Intel x86 Atom, android-29 | Google Play Intel x86 Atom, android-30 | Google APIs Intel x86 Atom
      Android NDK: Not Found
  IDEs:
    Android Studio: 3.5 AI-191.8026.42.35.6010548
    Xcode: 12.1/12A7403 - /usr/bin/xcodebuild
  Languages:
    Java: 1.8.0_172 - /usr/bin/javac
    Python: 2.7.15 - /usr/local/bin/python
  npmPackages:
    @react-native-community/cli: Not Found
    react: 16.13.1 => 16.13.1
    react-native: 0.63.3 => 0.63.3
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
```

## Running app locally 🚀

This assumes you have setup your environment.

```
// Clone repo
git clone git@github.com:SMJ93/nandos-tech-test.git

// Install dependencies
yarn

// Install Cocoapods
yarn podInstall

// Run metro server
yarn start

// Run iOS
yarn ios

// Run Android
yarn android
```

## TODO list if I had more time 🗒️

- Set up 3 environments (dev, staging and production) so we can adequately test features, third party libraries, CodePush etc
- Set up CodePush on staging and production so we can release bug fixes over the air quickly
- Write end to end tests using Detox to test the critical flows:
  - e.g. make sure the list of restaurants load from the remote location and display in a list view
- Handle offline behaviour
  - e.g. If the user loads up the app with no internet show an alert/message saying the user needs to connect to the internet to download the latest restaurants
  - Discuss with the product team whether we should cache the restaurants in async storage so the app works offline
- Set up Crashlytics and Performance monitoring in Firebase to notify/help us debug any issues
- Set up Fastlane and Codepush scripts to automate the release process
- Set up Continuous Integration using Bitrise to improve the release process
- Add more documentation explaining why certain libraries were used etc
- Handle errors
- Improve design
- Write integration / unit tests using Jest
