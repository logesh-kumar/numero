import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../app/AuthProvider';

export const LeaderboardScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Button onPress={() => logout()} title={'Log out'} />
      <Text>Leaderboard</Text>
    </View>
  );
};
