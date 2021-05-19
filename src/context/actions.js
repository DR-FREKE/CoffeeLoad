import {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../context/AppContext';

let all_cart = [];

export const getCartList = async (state, setState) => {
  try {
    const store = await AsyncStorage.getItem('@cart');
    // alert(store);
    if (store != null) {
      setState({
        ...state,
        cart: JSON.parse(store),
      });
    }
  } catch (error) {
    alert(error.message);
  }
};

export const addToCart = async (data, state, setState) => {
  //   const [state, setState] = useContext(AppContext);

  try {
    all_cart.push(data);
    const jsonVal = JSON.stringify(all_cart);

    await AsyncStorage.setItem('@cart', jsonVal);
    alert('Added to Cart');

    getCartList(state, setState);
  } catch (error) {
    alert(error.message);
  }
};
