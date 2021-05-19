import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Icon, Avatar, Text} from '@ui-kitten/components';
import logo from '../styles/assets/png/logo.png';

export const appWidth = Dimensions.get('screen').width;
export const appHeight = Dimensions.get('screen').height;

export const AlertIcon = props => (
  <Icon {...props} name="alert-circle-outline" />
);

export const Logo = props => (
  <View style={[styles.logo_view, {height: props.height || appHeight / 5}]}>
    <Avatar source={logo} style={styles.login_logo} />
  </View>
);

export const HomeTabIcon = props => (
  <Icon
    {...props}
    style={{color: '#000000', height: 25}}
    name="home"
    pack="ionicon"
  />
);
export const HomeTabIconInActive = props => (
  <Icon
    {...props}
    style={{color: '#6A6A6A', height: 25}}
    name="home"
    pack="ionicon"
  />
);

// icon wasn't working so I replaced it
export const ShopTabIcon = props => (
  <Icon
    {...props}
    style={{color: '#000000', height: 25}}
    name="wallet-outline"
    pack="ionicon"
  />
);
export const ShopTabIconInActive = props => (
  <Icon
    {...props}
    style={{color: '#6A6A6A', height: 25}}
    name="wallet-outline"
    pack="ionicon"
  />
);

export const AccTabIcon = props => (
  <Icon
    {...props}
    style={{color: '#000000', height: 25}}
    name="person"
    pack="ionicon"
  />
);
export const AccTabIconInActive = props => (
  <Icon
    {...props}
    style={{color: '#6A6A6A', height: 25}}
    name="person"
    pack="ionicon"
  />
);

export const AccountIcon = props => (
  <Icon {...props} name="receipt-outline" pack="ionicon" />
);
export const PendingIcon = props => <Icon {...props} name="" pack="ionicon" />;

export const LoveIcon = props => (
  <Icon
    {...props}
    style={{color: '#000000', height: 20}}
    name="heart-outline"
    pack="ionicon"
  />
);

export const SyncIcon = props => (
  <Icon {...props} name="sync-outline" pack="ionicon" />
);

export const SecurityIcon = props => (
  <Icon {...props} name="shield-checkmark-outline" pack="ionicon" />
);

export const TrashIcon = props => (
  <Icon
    {...props}
    name="trash-outline"
    style={{color: '#000000', height: 20}}
    pack="ionicon"
  />
);

export const CartIcon = props => (
  <Icon
    {...props}
    style={{width: 30, height: 30}}
    name="cart-outline"
    pack="ionicon"
  />
);

export const BackIcon = props => (
  <Icon
    {...props}
    style={{color: '#FFFFFF', height: 25}}
    name="arrow-back"
    pack="ionicon"
  />
);

export const SearchIcon = props => <Icon {...props} name="search" />;

export const ForwardIcon = props => (
  <Icon {...props} name="arrow-ios-forward" />
);

export const PlusIcon = props => (
  <Icon
    {...props}
    style={{width: 20, height: 20}}
    name="add-circle"
    pack="ionicon"
  />
);
export const MinusIcon = props => (
  <Icon
    {...props}
    style={{width: 20, height: 20}}
    name="remove-circle"
    pack="ionicon"
  />
);

const styles = StyleSheet.create({
  logo_view: {
    // height: appHeight / 5,
    paddingVertical: 5,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_logo: {
    width: appWidth / 2,
    height: 25,
    resizeMode: 'contain',
  },
});
