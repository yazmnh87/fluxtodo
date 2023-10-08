/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import StorybookUIRoot from './.storybook'
const bundleId = NativeModules.RNDeviceInfo?.bundleId
console.log(`${bundleId}`)
//console.ignoredYellowBox = ["Warning: Each", "Warning: Failed", "Could not find Fiber with id"];
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
//AppRegistry.registerComponent(appName, () => StorybookUIRoot);
