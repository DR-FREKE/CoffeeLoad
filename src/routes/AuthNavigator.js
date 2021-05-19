import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from '../screens';

const {Navigator, Screen} = createStackNavigator();

const AuthNavigator = () => (
  <Navigator headerMode="none" initialRouteName="login">
    <Screen name="login" component={screens.LoginScreen} />
    <Screen name="register" component={screens.RegisterScreen} />
  </Navigator>
);

export default AuthNavigator;
