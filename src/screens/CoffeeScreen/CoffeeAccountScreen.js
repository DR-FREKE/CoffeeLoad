import React, {useContext, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Menu, MenuItem, Text, Button} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import {AppContext} from '../../context/AppContext';
import {styles} from '../../styles/account.style';
import {
  HomeTabIcon,
  AccountIcon,
  ForwardIcon,
  LoveIcon,
  SyncIcon,
  AccTabIcon,
  SecurityIcon,
} from '../../components/Widget';

const Title = props => (
  <View>
    <Text category="h3" style={styles.topNav}>
      Account
    </Text>
    <Text style={styles.gen_font}>Welcome Adedire</Text>
  </View>
);

const CoffeeAccountScreen = ({navigation, ...props}) => {
  const [state, setState] = useContext(AppContext);

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  useEffect(() => {
    setState({
      ...state,
      isThemeDark: true,
    });
  }, []);

  return (
    <AppLayout showTopNav={true} title={Title} isThemeDark={state.isThemeDark}>
      <View style={styles.container}>
        <View style={styles.menu_view1}>
          <Text category="h6" style={styles.gen_font}>
            My Coffee Account
          </Text>
          <Menu style={styles.menu} appearance="noDivider">
            <MenuItem
              title="Orders"
              accessoryLeft={AccountIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
              di
            />
            <MenuItem
              title="Pending Orders"
              // accessoryLeft={HomeTabIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
            />
            <MenuItem
              title="Saved Orders"
              accessoryLeft={LoveIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
            />
            <MenuItem
              title="Recently Viewed"
              accessoryLeft={SyncIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
            />
          </Menu>
        </View>
        <View style={styles.menu_view2}>
          <Text category="h6" style={styles.gen_font}>
            My Settings
          </Text>
          <Menu style={styles.menu} appearance="noDivider">
            <MenuItem
              title="My Account Settings"
              // accessoryLeft={AccTabIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
              di
            />
            <MenuItem
              title="Payment Method"
              // accessoryLeft={HomeTabIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
              di
            />
            <MenuItem
              title="Security"
              accessoryLeft={SecurityIcon}
              accessoryRight={ForwardIcon}
              style={styles.menu_item}
              di
            />
          </Menu>
        </View>
        <View style={styles.btn_view}>
          <Button size="large" onPress={navigateToLogin} style={styles.log_out}>
            Log Out
          </Button>
        </View>
      </View>
    </AppLayout>
  );
};

export default CoffeeAccountScreen;
