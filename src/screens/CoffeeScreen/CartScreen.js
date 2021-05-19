import React, {useContext, useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import {styles} from '../../styles/cart.styles';
import {styles as authstyle} from '../../styles/auth.style';
import {AppContext} from '../../context/AppContext';
import {CoffeeCard} from '../../components/Row';
import {CarouselDisplay} from '../../components/CoffeeList';
import {getCartList} from '../../context/actions';

const Title = props => (
  <View>
    <Text category="h3" style={[styles.gen_font, {paddingTop: 18}]}>
      Cart
    </Text>
  </View>
);

const CartScreen = ({navigation, ...props}) => {
  const [state, setState] = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getCartList(state, setState);
  }, []);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value != 0) setValue(value - 1);
  };

  const renderListItem = ({item, index}) => (
    <CoffeeCard
      {...item}
      index={index}
      value={JSON.stringify(value)}
      increment={increment}
      decrement={decrement}
    />
  );

  return (
    <AppLayout showTopNav={true} title={Title} isThemeDark={state.isThemeDark}>
      <View style={styles.container}>
        {state.cart.length > 0 ? (
          <>
            <FlatList data={state.cart} renderItem={renderListItem} />
            <View style={styles.card_view}>
              <View style={styles.complete_order}>
                <View style={styles.total_price}>
                  <Text style={authstyle.font_style}>Total</Text>
                  <Text style={authstyle.font_style}>£40.00</Text>
                </View>
                <Button size="large" style={styles.btn_order}>
                  Complete Your Order
                </Button>
              </View>
              <View>
                <CarouselDisplay
                  loading={state.loading}
                  coffees={state.coffees}
                  padBottom
                  height
                />
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Nothing in Cart</Text>
          </View>
        )}
      </View>
    </AppLayout>
  );
};

export default CartScreen;
