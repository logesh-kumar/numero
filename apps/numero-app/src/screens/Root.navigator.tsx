import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './BottomTabs.navigator';
import { RootStackParamList } from '../types';
import { AuthNavigator } from './Auth.navigator';
import { AuthContext } from '../app/AuthProvider';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const { user, login } = React.useContext(AuthContext);

  const [loading, setLoading] = React.useState(true);

  console.log({ user });

  return !user ? (
    <AuthNavigator />
  ) : (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
