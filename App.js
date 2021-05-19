import 'react-native-gesture-handler';
import React, {useContext, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from './src/routes/AppNavigator';
import {AppContext} from './src/context/AppContext';
import {FeatherIconsPack} from './src/styles/icons/feather.icon';
import {IoniconIconsPack} from './src/styles/icons/ionicon.icon';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const AppState = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <>
      <IconRegistry
        icons={[EvaIconsPack, FeatherIconsPack, IoniconIconsPack]}
      />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar
          backgroundColor={!state.isThemeDark ? '#D0B49F' : '#A47551'}
          barStyle="dark-content"
        />
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

const App = () => <AppState />;

export default App;
