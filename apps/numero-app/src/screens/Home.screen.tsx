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
      createdAt
      user {
        id
        email
      }
    }
  }
`;

export const HomeScreen: React.FC = () => {
  const [{ data, fetching, error }] = useQuery({ query: GAMES });
  console.log(error);
  return (
    <View style={styles.container}>
      {data && <Text style={styles.text}>{JSON.stringify(data)}</Text>}
      <Text style={styles.text}>Hello world...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
