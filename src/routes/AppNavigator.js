import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '../screens';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const {Navigator, Screen} = createStackNavigator();

const TedbreeNavigator = () => (
  <Navigator headerMode="none" initialRouteName="onboard">
    <Screen name="onboard" component={screens.SplashScreen} />
    <Screen name="auth" component={AuthNavigator} />
    <Screen name="main" component={MainTabNavigator} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TedbreeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
