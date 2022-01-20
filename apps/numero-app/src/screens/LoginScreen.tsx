import React, { useCallback, useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../app/AuthProvider';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = useCallback(() => {
    login();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin} title={'Log In'} />
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
  input: {
    borderColor: '#333',
    borderWidth: 1,
    width: 300,
    height: 50,
  },
});
