import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home.screen';
import { BottomTabParamList } from '../types';
import { LeaderboardScreen } from './Leaderboard.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Leaderboard" component={LeaderboardScreen} />
    </BottomTabs.Navigator>
  );
};
