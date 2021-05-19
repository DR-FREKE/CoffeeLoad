import React, {useContext, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import CoffeeData from '../../components/Coffee';
import {Avatar, Text, Button} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import coffee1 from '../../styles/assets/png/coffee1.png';
import coffee2 from '../../styles/assets/png/coffee2.png';
import {styles} from '../../styles/home.style';
import {CartIcon} from '../../components/Widget';
import {CarouselDisplay} from '../../components/CoffeeList';
import logo from '../../styles/assets/png/logo.png';
import {AppContext} from '../../context/AppContext';

const CoffeeHomeScreen = ({navigation, ...props}) => {
  const [state, setState] = useContext(AppContext);

  const navigateToCart = () => {
    navigation.navigate('cart');
  };

  useEffect(() => {
    setState({
      ...state,
      coffees: CoffeeData,
      loading: false,
      isThemeDark: false,
    });
  }, []);

  return (
    <AppLayout>
      <View>
        <View style={styles.banner1}>
          <View style={styles.bannerTitle}>
            <Text category="h4" style={{fontFamily: 'PlayfairDisplayBold'}}>
              Welcome Adedire
            </Text>
            <Button
              accessoryRight={CartIcon}
              onPress={navigateToCart}
              style={styles.cart_icon}
            />
          </View>
          <View style={styles.card1}>
            <Avatar shape="square" style={styles.coffeeImg1} source={coffee1} />
          </View>
        </View>
        <View style={styles.banner2}>
          <View style={styles.banner2_logo}>
            <Avatar source={logo} style={styles.banner2_img} />
          </View>
          <View style={styles.description}>
            <Text category="c2">
              We have sourced the finest and rearest coffees, that easily allows
              coffee lovers to experience one of life's simple pleasures
              delivered right to your doorstep
            </Text>
          </View>
          <View style={styles.card2}>
            <Avatar
              shape="square"
              style={styles.coffeeImg2}
              source={coffee2}
              ImageComponent={ImageBackground}>
              <Text category="h4" style={styles.coffeeimg_text}>
                Our Coffee
              </Text>
            </Avatar>
          </View>
        </View>
        <View style={styles.banner3}>
          <CarouselDisplay loading={state.loading} coffees={state.coffees} />
          <View style={styles.plan_view}>
            <Button size="large" style={styles.btn_plan}>
              {evaProps => (
                <Text
                  {...evaProps}
                  style={{color: '#523A28', fontWeight: 'bold'}}>
                  Create a Coffee Plan
                </Text>
              )}
            </Button>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default CoffeeHomeScreen;
