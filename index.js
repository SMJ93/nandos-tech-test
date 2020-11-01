import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';

import App from './src/app';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
