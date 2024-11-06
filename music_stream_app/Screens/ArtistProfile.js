import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Search from './Search';
import FeedAudioListing from './FeedAudioListing';
import Library from './Library';


export default function ArtistProfile({navigation}) {
  return (
    <SafeAreaView >
      <Text>Welcome to Artist Profile!</Text>
    </SafeAreaView>
  );
}
