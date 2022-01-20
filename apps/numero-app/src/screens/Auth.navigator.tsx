import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { AuthStackParamList } from '../types';
import { RegistrationScreen } from './RegistrationScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen component={LoginScreen} name="Signin" />
      <Stack.Screen component={RegistrationScreen} name="Register" />
    </Stack.Navigator>
  );
};
