import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Spinner, Popover, Button} from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';
import Coffee from './Row';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../context/AppContext';
import {getCartList, addToCart} from '../context/actions';

const AlertConfirm = props => (
  <Popover visible={props.visible} anchor={props.toggle}>
    <View>
      <Text>Added to Cart</Text>
    </View>
  </Popover>
);

export const CarouselDisplay = props => {
  let carousel = null;

  const [visible, setVisible] = useState(false);
  const [state, setState] = useContext(AppContext);

  const renderItem = ({item}) => {
    return <Coffee item={item} addCart={addToCart} />;
  };

  return (
    <>
      <View style={styles.banner3_title}>
        <Text
          category="c2"
          style={[
            styles.banner3_text,
            {
              paddingBottom: props.padBottom ? 0 : 10,
            },
          ]}>
          Top Selling Coffee
        </Text>
      </View>
      <View
        style={[
          styles.coffee_item_view,
          {height: props.height ? '62%' : '65%'},
        ]}>
        {props.loading ? (
          <View style={styles.spinnerContainer}>
            <Spinner />
          </View>
        ) : (
          <Carousel
            layout="default"
            ref={node => {
              carousel = node;
            }}
            data={props.coffees.slice(0, 5)}
            renderItem={renderItem}
            sliderWidth={160}
            itemWidth={130}
          />
        )}
      </View>
      {/* <AlertConfirm visible={visible} toggle={renderItem} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  banner3_title: {
    paddingHorizontal: 25,
  },
  banner3_text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  coffee_item_view: {
    flexDirection: 'row',
    // height: '65%',
    alignItems: 'center',
  },
  spinnerContainer: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
