/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from './src/context/AppContext';

const MainApp = () => (
  <Provider>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
