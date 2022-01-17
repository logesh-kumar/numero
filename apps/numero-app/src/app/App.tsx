/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createClient, Provider as UrqlProvider } from 'urql';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../screens/Root.navigator';
const client = createClient({
  url:
    Platform.OS === 'android'
      ? 'http://192.168.0.153:3333/graphql'
      : 'http://localhost:3333/graphql',
});

const App = () => {
  return (
    <SafeAreaProvider>
      <UrqlProvider value={client}>
        <NavigationContainer>
          <StatusBar hidden />
          <RootNavigator />
        </NavigationContainer>
      </UrqlProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
