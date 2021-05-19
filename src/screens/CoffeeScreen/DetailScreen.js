import React, {useContext, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import CoffeeData from '../../components/Coffee';
import {
  Text,
  TopNavigationAction,
  Input,
  Spinner,
  Avatar,
} from '@ui-kitten/components';
import {FlatGrid} from 'react-native-super-grid';
import AppLayout from '../../components/AppLayout';
import {AppContext} from '../../context/AppContext';
import {BackIcon, CartIcon, SearchIcon} from '../../components/Widget';
import coffee2 from '../../styles/assets/png/coffee2.png';
import Coffee from '../../components/Row';
import {addToCart} from '../../context/actions';
import {styles} from '../../styles/details.styles';
import {styles as shop_style} from '../../styles/shop.style';

const DetailScreen = ({navigation, ...props}) => {
  const BackAction = () => (
    <TopNavigationAction onPress={navigateBack} icon={BackIcon} />
  );

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <AppLayout showTopNav={true} accessoryLeft={BackAction}>
      <View style={styles.container}>
        <View style={shop_style.search_view}>
          <Input
            placeholder="Search"
            placeholderTextColor="#A47551"
            accessoryLeft={SearchIcon}
          />
        </View>
        <View></View>
      </View>
    </AppLayout>
  );
};

export default DetailScreen;
