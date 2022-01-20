/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  makeOperation,
  Provider as UrqlProvider,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';

// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../screens/Root.navigator';
import { AuthProvider } from './AuthProvider';

const addAuthToOperation = ({ authState, operation }) => {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: authState.token,
      },
    },
  });
};

const getAuth = async ({ authState, mutate }) => {
  if (!authState) {
    const token = await AsyncStorage.getItem('auth_token');
    console.log({ token });

    if (token) {
      return { token };
    }
    return null;
  }

  return null;
};

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(null);

  const client = useMemo(() => {
    console.log({ isLoggedIn });
    return createClient({
      url:
        Platform.OS === 'android'
          ? 'http://192.168.0.153:3333/graphql'
          : 'http://localhost:3333/graphql',

      exchanges: [
        dedupExchange,
        cacheExchange,
        // authExchange({
        //   addAuthToOperation,
        //   getAuth,
        // }),
        fetchExchange,
      ],
    });
  }, [isLoggedIn]);

  return (
    <SafeAreaProvider>
      <UrqlProvider value={client}>
        <AuthProvider>
          <NavigationContainer>
            <StatusBar hidden />
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </UrqlProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
