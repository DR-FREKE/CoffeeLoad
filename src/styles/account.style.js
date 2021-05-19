import {StyleSheet} from 'react-native';
import {appHeight, appWidth} from '../components/Widget';

export const styles = StyleSheet.create({
  container: {
    height: appHeight,
    backgroundColor: '#FFFFFF',
  },
  menu_view1: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  menu_view2: {
    paddingHorizontal: 10,
  },
  menu: {
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  menu_item: {
    borderColor: '0.5px solid rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  btn_view: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  log_out: {
    backgroundColor: '#523A28',
    borderColor: '#523A28',
    borderRadius: 10,
    elevation: 5,
  },
  topNav: {
    paddingBottom: 20,
    fontFamily: 'PlayfairDisplayBold',
  },
  gen_font: {
    fontFamily: 'PlayfairDisplayBold',
  },
});
