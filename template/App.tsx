/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { UseGetAllPosts } from './src/hooks/getAllPostsQuery';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen() {

  const {data, isLoading} = UseGetAllPosts();

  const ListHeader = () => {
    return (
      <View style={{}}>
        <Text style={{ padding: 10, fontSize: 20}}>Me the header</Text>
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

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
    </View>
  );
}

function PostScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator

          screenOptions={({ route }) => ({

            // tabBarLabelPosition: "beside-icon",
            tabBarLabelPosition: "below-icon",

            tabBarLabelStyle: {
              fontWeight: "400",
              fontSize: 10,
              marginBottom: 5,
              display: 'none',

            },

            // tabBarIconStyle: { display: "none" },
            tabBarActiveTintColor: '#333333',
            tabBarInactiveTintColor: '#c0c0c0',

          })}

        >
          <Tab.Screen name="Home" component={HomeScreen}

            options={{
              title: 'Home',
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={focused? require('./src/assets/icons/Icon-Home.png') : require('./src/assets/icons/Icon-Home-Inactive.png')}
                  />
                );
              },
            }}

          />

          <Tab.Screen name="Search" component={SearchScreen}

            options={{
              title: 'Search',
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={focused? require('./src/assets/icons/Icon-Search.png') : require('./src/assets/icons/Icon-Search-Inactive.png')}
                  />
                );
              },
            }}

          />

          <Tab.Screen name="Post" component={PostScreen}

            options={{
              title: 'Post',
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={focused? require('./src/assets/icons/Icon-Post.png') : require('./src/assets/icons/Icon-Post-Inactive.png')}
                  />
                );
              },
            }}

          />

          <Tab.Screen name="Profile" component={ProfileScreen}

            options={{
              title: 'Profile',
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={focused? require('./src/assets/icons/Icon-User.png') : require('./src/assets/icons/Icon-User-Inactive.png')}
                  />
                );
              },
            }}

          />

          <Tab.Screen name="Settings" component={SettingsScreen}

            options={{
              title: 'Settings',
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={focused? require('./src/assets/icons/Icon-Settings.png') : require('./src/assets/icons/Icon-Settings-Inactive.png')}
                  />
                );
              },
            }}

          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
