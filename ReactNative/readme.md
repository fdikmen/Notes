- A command that lists all Android devices and active Android emulators connected to your computer via USB:
```node
adb devices
```
- List connected iOS devices and available iOS simulators command:
```node
xcrun simctl list devices
```
- Use this command to run on a specific simulator
```node
npx react-native run-ios --simulator="iPhone 15 Pro"
```
- With Script
```json
"scripts": {
  "ios": "react-native run-ios --simulator=\"iPhone 13\""
}
```
- Use this command to run on a specific device
```node
npx react-native run-ios --device="Your Iphone Name"
```

- To delete pods in IOS Project (do it in the ios folder with cd ios)
```bash
pod deintegrate
pod cache clean --all
pod setup
pod install
```

- Opening the application in Xcode
```bash
xed ios
```
