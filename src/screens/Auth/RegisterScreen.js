import React, {useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, Icon, Input, Button, Divider} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import {Logo, AlertIcon, appHeight} from '../../components/Widget';
import {styles} from '../../styles/auth.style';

const RegisterScreen = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigateToHome = () => {
    navigation.navigate('main');
  };

  const toggleVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const eyeIcon = props => (
    <TouchableWithoutFeedback onPress={toggleVisibility}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-outline' : 'eye-off-2-outline'}
        fill="#A47551"
      />
    </TouchableWithoutFeedback>
  );
  return (
    <AppLayout>
      <KeyboardAwareScrollView>
        <Logo height={100} />
        <View style={[styles.auth_container, {height: appHeight - 300}]}>
          <View style={styles.signup_header}>
            <Text category="h4">Create an Account</Text>
          </View>
          <Input
            label={<Text style={styles.font_style}>Name</Text>}
            placeholder="enter your name"
            size="large"
            style={styles.login_input}
          />
          <Input
            label={<Text style={styles.font_style}>Email</Text>}
            placeholder="example@gmail.com"
            size="large"
            style={[styles.login_input, {marginTop: 20}]}
          />
          <Input
            label={<Text style={styles.font_style}>Password</Text>}
            placeholder="enter your password"
            size="large"
            secureTextEntry={secureTextEntry}
            style={[styles.login_input, {marginTop: 20}]}
            accessoryRight={eyeIcon}
          />
          <Input
            label={<Text style={styles.font_style}>Confirm Password</Text>}
            placeholder="confirm your password"
            size="large"
            secureTextEntry={true}
            style={[styles.login_input, {marginTop: 20}]}
          />
          <View style={[styles.btn_view, {height: appHeight / 6}]}>
            <Button
              style={styles.btn_login}
              size="large"
              onPress={navigateToHome}>
              Sign Up
            </Button>
          </View>
        </View>
        <View
          style={[
            styles.bottom_container,
            {height: 100, justifyContent: 'flex-end'},
          ]}>
          <View style={styles.terms_view}>
            <Text style={styles.font_style}>
              Terms of Services and Privacy Policies
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AppLayout>
  );
};

export default RegisterScreen;
