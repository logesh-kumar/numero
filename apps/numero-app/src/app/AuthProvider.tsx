import React, { useState } from 'react';
import { gql, useMutation } from 'urql';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = null | {
  token: string;
};

const SIGNIN = gql`
  mutation login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

export const AuthContext = React.createContext<{
  login: () => void;
  logout: () => void;
  user: User;
}>({
  login: () => null,
  logout: () => null,
  user: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [{ fetching }, loginMutation] = useMutation(SIGNIN);
  return (
    <AuthContext.Provider
      value={{
        login: async () => {
          try {
            const result: any = await loginMutation({
              data: { email: 'logesh@gmail.com', password: 'Logu@123' },
            });

            console.log({ result });
            await AsyncStorage.setItem(
              'auth_token',
              result?.data?.login?.accessToken
            );

            setUser({ token: result?.data?.login?.accessToken });
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          await AsyncStorage.setItem('auth_token', '');
          setUser(null);
        },
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
