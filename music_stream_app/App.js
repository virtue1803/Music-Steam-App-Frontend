import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home'
import LaunchScreen from './Screens/LaunchScreen'
import TopScreen from './Screens/TopScreen'
import LaunchScreenPremium from './Screens/LaunchScreenPremium'
import FeedAudioListing from './Screens/FeedAudioListing'
import Library from './Screens/Library'
import Search from './Screens/Search'

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown : false
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Ionicons name="search-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={FeedAudioListing}
          options={{
            tabBarIcon: () => (
              <Ionicons name="reader-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: () => (
              <Ionicons name="library-outline" size={30} color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}