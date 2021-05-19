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
import {styles} from '../../styles/shop.style';
import {styles as homestyle} from '../../styles/home.style';
import Coffee from '../../components/Row';
import {addToCart} from '../../context/actions';

const CoffeeShopScreen = ({navigation, ...props}) => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    setState({
      ...state,
      coffees: CoffeeData,
      loading: false,
    });
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToCart = () => {
    navigation.navigate('cart');
  };

  const BackAction = () => (
    <TopNavigationAction onPress={navigateBack} icon={BackIcon} />
  );

  const CartAction = () => (
    <TopNavigationAction onPress={navigateToCart} icon={CartIcon} />
  );

  const goToDetails = () => {
    navigation.navigate('detail');
  };

  const renderItem = ({item}) => {
    return <Coffee item={item} addCart={addToCart} goDetails={goToDetails} />;
  };

  return (
    <AppLayout
      showTopNav={true}
      accessoryLeft={BackAction}
      accessoryRight={CartAction}>
      <View style={styles.container}>
        <View style={styles.search_view}>
          <Input
            placeholder="Search"
            placeholderTextColor="#A47551"
            accessoryLeft={SearchIcon}
          />
        </View>
        <View style={styles.banner}>
          <Avatar
            shape="square"
            style={homestyle.coffeeImg2}
            source={coffee2}
            ImageComponent={ImageBackground}>
            <Text category="h4" style={homestyle.coffeeimg_text}>
              Our Coffee
            </Text>
          </Avatar>
        </View>
        <View style={styles.grid_view}>
          <FlatGrid
            itemDimension={100}
            data={state.coffees}
            style={styles.grid}
            spacing={3}
            renderItem={renderItem}
          />
        </View>
      </View>
    </AppLayout>
  );
};

export default CoffeeShopScreen;
