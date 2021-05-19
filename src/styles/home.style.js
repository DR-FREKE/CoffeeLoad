import {StyleSheet} from 'react-native';
import {appWidth, appHeight} from '../components/Widget';

export const styles = StyleSheet.create({
  banner1: {
    height: appHeight / 4,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  card1: {
    backgroundColor: 'transparent', // should be transparent
    height: '100%',
    borderColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 0,
  },
  coffeeImg1: {
    width: '100%',
    height: 154,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bannerTitle: {
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart_icon: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  // banner two
  banner2: {
    height: appHeight / 4,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  banner2_logo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  banner2_img: {
    width: '40%',
    height: 18,
    resizeMode: 'contain',
  },
  description: {
    paddingVertical: 10,
  },
  card2: {
    backgroundColor: 'transparent', // should be transparent
    height: '50%',
    borderColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 0,
  },
  coffeeImg2: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coffeeimg_text: {
    color: '#FFFFFF',
    fontFamily: 'PlayfairDisplayBold',
  },

  // banner 3
  banner3: {
    height: appHeight / 3.2,
  },
  plan_view: {
    height: '25%',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  btn_plan: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
  },
});
