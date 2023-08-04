import React from 'react';
import type {PropsWithChildren} from 'react';
import axios from 'axios';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  Alert,
} from 'react-native';

// React Query
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';

function PostScreen() {

  const [text, onChangeText] = React.useState('') ;

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('https://dev1.humanagencyinc.com/react-tests/api.php/records/quips', newTodo)
    },
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {mutation.isLoading ? (
        <Text>Adding post...</Text>
      ) : (

        <>

        <Text>Something else</Text>

        {mutation.isError ? ( <Text>An error occurred: {mutation.error.message}</Text>) : null}

        {mutation.isSuccess ? <Text>Quip added!</Text> : null}

        <TextInput
          style={{ borderWidth: 1, padding: 10, width: 200, }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Post something!"
        />

        <Button
          title="mutate"
          onPress={() => {
            mutation.mutate({ quip: text })
          }}

          color="green"
        />

        </>

      )}

      <Text>Post 26</Text>

      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200, }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Post something!"
      />

      <Button
        title="Show text"
        onPress={() =>
          Alert.alert(text)
        }
        color="green"
      />

      <Button
        title="Post double"
        onPress={() => {
          Alert.alert("Another Test")
        }}
        color="green"
      />

      <Button
        title="mutate"
        onPress={() => {
          mutation.mutate({ quip: text })
        }}

        color="green"
      />

      <Button
        title="console log"
        onPress={() => {
          console.log("hey now, this the console.")
        }}

        color="green"
      />

   </View>

  );
}

export default PostScreen;
