import {StyleSheet} from 'react-native';
import {appWidth, appHeight} from '../components/Widget';

export const styles = StyleSheet.create({
  container: {
    height: appHeight,
  },
  font_style: {
    fontWeight: 'bold',
  },

  // login and sign up container
  auth_container: {
    height: appHeight / 2.5,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },

  login_input: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  forgot_link: {
    textAlign: 'right',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },

  btn_view: {
    height: appHeight / 4,
    justifyContent: 'center',
  },
  btn_login: {
    borderColor: '#523A28',
    backgroundColor: '#523A28',
    overflow: 'hidden',
    shadowOffset: {width: 20, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 5,
    borderRadius: 8,
  },
  divider_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  divider: {
    width: 160,
    backgroundColor: '#A47551',
  },

  // bottom container
  bottom_container: {
    height: appHeight / 3.5,
    paddingTop: 25,
    paddingHorizontal: 30,
  },

  other_option: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  terms_view: {
    height: 90,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'flex-end',
  },

  // for sign up
  signup_header: {
    paddingBottom: 20,
  },
});
