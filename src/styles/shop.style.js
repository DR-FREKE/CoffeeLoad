import {StyleSheet} from 'react-native';
import {appHeight, appWidth} from '../components/Widget';

export const styles = StyleSheet.create({
  container: {
    // height: appHeight,
    // backgroundColor: 'green',
  },
  search_view: {
    // backgroundColor: 'red',
    paddingHorizontal: 30,
  },
  banner: {
    height: appHeight / 6,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  grid_view: {
    height: 450,
    // backgroundColor: 'red',
  },
  grid: {
    height: 450,
    // backgroundColor: 'green',
  },
});
