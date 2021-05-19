import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import * as screens from '../screens';
import {
  HomeTabIcon,
  ShopTabIcon,
  AccTabIcon,
  HomeTabIconInActive,
  ShopTabIconInActive,
  AccTabIconInActive,
} from '../components/Widget';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createBottomTabNavigator();
const Nav = createStackNavigator();

const HomeNavigator = () => (
  <Nav.Navigator headerMode="none" initialRouteName="homelist">
    <Nav.Screen name="homelist" component={screens.CoffeeHomeScreen} />
    <Nav.Screen name="cart" component={screens.CartScreen} />
  </Nav.Navigator>
);

const ShopNavigator = () => (
  <Nav.Navigator headerMode="none" initialRouteName="shoplist">
    <Nav.Screen name="shoplist" component={screens.CoffeeShopScreen} />
    <Nav.Screen name="detail" component={screens.DetailScreen} />
  </Nav.Navigator>
);

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    style={{backgroundColor: '#F8F8F8'}}
    indicatorStyle={{backgroundColor: '#523A28'}}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      icon={state.index == 0 ? HomeTabIcon : HomeTabIconInActive}
    />
    <BottomNavigationTab
      icon={state.index == 1 ? ShopTabIcon : ShopTabIconInActive}
    />
    <BottomNavigationTab
      icon={state.index == 2 ? AccTabIcon : AccTabIconInActive}
    />
  </BottomNavigation>
);

const MainTabNavigator = () => (
  <Navigator
    tabBar={props => <BottomTabBar {...props} />}
    initialRouteName="home"
    backBehavior="none">
    <Screen name="home" component={HomeNavigator} />
    <Screen name="shop" component={ShopNavigator} />
    <Screen name="account" component={screens.CoffeeAccountScreen} />
  </Navigator>
);

export default MainTabNavigator;
