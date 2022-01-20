import { NavigatorScreenParams } from '@react-navigation/core';

export type BottomTabParamList = {
  Home: undefined;
  Leaderboard: undefined;
};

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  Signin: undefined;
};
