import {StyleSheet} from 'react-native';
import {appHeight} from '../components/Widget';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  card_view: {
    height: 450,
  },
  complete_order: {
    height: 100,
    paddingHorizontal: 25,
  },
  total_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  btn_order: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#523A28',
    borderColor: '#523A28',
    elevation: 5,
  },
  gen_font: {
    fontFamily: 'PlayfairDisplayBold',
  },
});
