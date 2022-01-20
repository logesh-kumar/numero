import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './BottomTabs.navigator';
import { RootStackParamList } from '../types';
import { LoginScreen } from './LoginScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name="Signin" component={LoginScreen} /> */}
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
