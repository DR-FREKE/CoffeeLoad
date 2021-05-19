import React, {useEffect, useContext} from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import {Logo} from '../../components/Widget';
import {AppContext} from '../../context/AppContext';
import Auth from '../../routes/AuthNavigator';

const SplashScreen = ({navigation}) => {
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => setState({...state, showLoadScreen: false}), 2000);
  }, []);

  if (!state.showLoadScreen) {
    return <Auth />;
  } else {
    return (
      <AppLayout>
        <View
          style={{
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
          }}>
          <Logo />
        </View>
      </AppLayout>
    );
  }
};

export default SplashScreen;
