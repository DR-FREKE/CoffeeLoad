import React, {useState, useEffect} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Text, Icon, Input, Button, Divider} from '@ui-kitten/components';
import AppLayout from '../../components/AppLayout';
import {Logo, AlertIcon} from '../../components/Widget';
import {styles} from '../../styles/auth.style';

const forgotPassword = evaProps => (
  <TouchableWithoutFeedback {...evaProps} onPress={() => alert('wassa')}>
    <Text style={[styles.forgot_link, styles.font_style]}>
      Forgot Password ?
    </Text>
  </TouchableWithoutFeedback>
);

const LoginScreen = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setState({
      ...state,
      isThemeDark: false,
    });
  }, []);

  const navigateToHome = () => {
    navigation.navigate('main');
  };

  const navigateToSignUp = () => {
    navigation.navigate('register');
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
      <View style={styles.container}>
        <Logo />
        <View style={styles.auth_container}>
          <Input
            label={<Text style={styles.font_style}>Email</Text>}
            placeholder="example@gmail.com"
            size="large"
            style={styles.login_input}
          />
          <Input
            label={<Text style={styles.font_style}>Password</Text>}
            placeholder="password here"
            size="large"
            secureTextEntry={secureTextEntry}
            style={[styles.login_input, {marginTop: 20}]}
            caption={forgotPassword}
            accessoryRight={eyeIcon}
          />
          <View style={styles.btn_view}>
            <Button
              style={styles.btn_login}
              size="large"
              onPress={navigateToHome}>
              Login
            </Button>
            <View style={styles.divider_view}>
              <Divider style={styles.divider} />
              <Text style={[styles.font_style, {paddingHorizontal: 5}]}>
                OR
              </Text>
              <Divider style={styles.divider} />
            </View>
          </View>
        </View>
        <View style={styles.bottom_container}>
          <Button
            size="large"
            style={styles.other_option}
            onPress={navigateToSignUp}>
            <Text style={styles.font_style}>Sign Up with Email</Text>
          </Button>
          <Button size="large" style={[styles.other_option, {marginTop: 20}]}>
            <Text style={styles.font_style}>Sign in with Google</Text>
          </Button>
          <View style={styles.terms_view}>
            <Text style={styles.font_style}>
              Terms of Services and Privacy Policies
            </Text>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default LoginScreen;
