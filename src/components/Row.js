import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Avatar,
  Text,
  Button,
  Card,
  Divider,
  Input,
} from '@ui-kitten/components';
import {LoveIcon, PlusIcon, TrashIcon, MinusIcon} from './Widget';

const Coffee = ({item, ...props}) => (
  <TouchableWithoutFeedback onPress={props.goDetails}>
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Avatar
          size="large"
          shape="square"
          style={styles.image}
          source={item.image}
        />
      </View>

      <View style={styles.info_container}>
        <Text category="c2" style={styles.name}>
          {item.coffee_name}
        </Text>
        <Text category="c2" style={styles.price}>
          {item.price}
        </Text>
      </View>
      <View style={styles.btn_container}>
        {/* <Text>Add to Cart</Text> */}
        <Button
          size="tiny"
          style={styles.add_cart}
          onPress={() => props.addCart(item)}>
          Add to Cart
        </Button>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export const CoffeeCard = props => (
  <View key={props.index} style={styles.card_container}>
    <Card style={styles.card}>
      <View style={styles.view1}>
        <View style={styles.img_view}>
          <Avatar style={styles.img} shape="square" source={props.image} />
        </View>
        <View style={styles.text_view}>
          <Text category="h6" style={styles.txt}>
            {props.coffee_name}
          </Text>
          <Text category="c2" style={styles.txt}>
            {props.price}
          </Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.actions}>
        <View style={styles.left_view}>
          <TouchableWithoutFeedback>
            <View style={styles.icons}>
              <LoveIcon />
            </View>
          </TouchableWithoutFeedback>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableWithoutFeedback>
              <View style={styles.icons}>
                <TrashIcon />
              </View>
            </TouchableWithoutFeedback>

            <Text category="c2" style={{fontWeight: 'bold'}}>
              Remove
            </Text>
          </View>
        </View>
        <View style={styles.right_view}>
          <TouchableWithoutFeedback onPress={props.increment}>
            <View>
              <PlusIcon />
            </View>
          </TouchableWithoutFeedback>
          <Input style={{width: 50}} disabled value={props.value} />
          <TouchableWithoutFeedback onPress={props.decrement}>
            <View>
              <MinusIcon />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4D4C8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    height: 165,
    marginBottom: 10,
  },
  img_container: {
    width: '100%',
    backgroundColor: 'transparent', // should be transparent
    height: '50%',
    borderColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 117,
    height: 75,
    // resizeMode: 'cover',
    borderRadius: 15,
  },
  info_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    paddingTop: 1,
    fontWeight: 'bold',
  },
  price: {
    paddingVertical: 5,
  },
  btn_container: {
    width: '100%',
    margin: 0,
  },
  add_cart: {
    margin: 0,
    padding: 0,
    borderRadius: 5,
    backgroundColor: '#523A28',
    borderColor: '#523A28',
  },

  // card design
  card_container: {
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#E4D4C8',
    borderWidth: 0,
    marginTop: 10,
  },
  view1: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'flex-start',
  },
  img_view: {
    // backgroundColor: 'yellow',
    width: 100,
    paddingHorizontal: 0,
  },
  img: {
    width: 100,
    height: 70,
    marginLeft: -5,
    borderRadius: 0,
    // resizeMode: 'cover',
  },
  text_view: {
    // backgroundColor: 'green',
    width: '50%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  txt: {
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  divider: {
    backgroundColor: '#A47551',
  },

  // action in card
  actions: {
    paddingTop: 15,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left_view: {
    flexDirection: 'row',
  },
  right_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: '#000000',
    marginHorizontal: 10,
    // backgroundColor: 'blue',
  },
});

export default Coffee;
