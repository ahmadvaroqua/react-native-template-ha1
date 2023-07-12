import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList
} from 'react-native';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UseGetAllPosts } from '../hooks/getAllPostsQuery';


function HomeScreen() {

  const {data, isLoading} = UseGetAllPosts();

  const ListHeader = () => {
    return (
      <View style={{}}>
        <Text style={{ padding: 10, fontSize: 20}}>Me the header 22</Text>
      </View>

    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', borderWidth: 0, borderColor: 'red', backgroundColor: 'white' }}>

      <Text style={{ padding: 30, fontSize: 30, fontWeight: 700 }}>Home</Text>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <FlatList
          data={data.records}
          renderItem={({item}) => <Text style={{ borderWidth: 0, borderColor: 'blue', padding: 10 }}>{item.quip}</Text>}
          keyExtractor={(item) => item.id}
          style={{ borderWidth: 0, borderColor: 'black', width: "100%", padding: 20}}
          ListHeaderComponent={ListHeader}

        />
      ) : (
        <Text>Whoops No Data Available</Text>
      )}

    </View>

  );
}

export default HomeScreen;