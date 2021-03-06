import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Auth0 from 'react-native-auth0';
import { gql } from 'urql';
import { AUTH0_CONFIG } from '../auth0-configuration';

const auth0 = new Auth0(AUTH0_CONFIG);

const SIGNIN = gql`
  mutation login {
    login(data: { email: "logesh@gmail.com", password: "Logu@123" }) {
      accessToken
      refreshToken
    }
  }
`;

export const LoginScreen: React.FC = () => {
  const [accessToken, setAccessToken] = useState(null);

  const onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then((credentials) => {
        console.log({ credentials });
        Alert.alert('AccessToken: ' + credentials.accessToken);
        setAccessToken(credentials.accessToken);
      })
      .catch((error) => console.log(error));
  };

  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then((success) => {
        Alert.alert('Logged out!');
        setAccessToken(null);
      })
      .catch((error) => {
        console.log('Log out cancelled');
      });
  };

  const loggedIn = accessToken !== null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Text>You are{loggedIn ? ' ' : ' not '}logged in. </Text>
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
