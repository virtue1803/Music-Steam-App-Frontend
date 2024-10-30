import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CounterApp() {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="home-outline" size={24} color="gray" />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="search-outline" size={24} color="gray" />
        <Text style={styles.tabText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="reader-outline" size={24} color="gray" />
        <Text style={styles.tabText}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="library-outline" size={24} color="gray" />
        <Text style={styles.tabText}>Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});
