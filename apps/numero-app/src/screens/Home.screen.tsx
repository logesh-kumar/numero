import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { gql, useQuery } from 'urql';

const GAMES = gql`
  query games {
    games {
      id
      userId
    }
  }
`;

export const HomeScreen: React.FC = () => {
  const [{ data, fetching, error }] = useQuery({ query: GAMES });
  console.log(error);
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
