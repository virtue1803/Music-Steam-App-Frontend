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
import BottomMenu from './BottomMenu.js';

export default function CounterApp() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <ScrollView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.username}>Ashley Scott</Text>
            <Image
              source={{ uri: 'https://example.com/profile-pic.jpg' }}
              style={styles.profilePic}
            />
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <TextInput
              placeholder="What you want to listen to"
              style={styles.searchInput}
            />
          </View>

          {/* Suggestions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Suggestions for you</Text>
            <ScrollView horizontal>
              <View style={styles.suggestionItem}>
                <Image
                  source={{ uri: 'https://example.com/image1.jpg' }}
                  style={styles.suggestionImage}
                />
                <Text style={styles.suggestionText}>Reflection</Text>
                <Text style={styles.suggestionSubText}>Christina Aguilera</Text>
              </View>
              <View style={styles.suggestionItem}>
                <Image
                  source={{ uri: 'https://example.com/image2.jpg' }}
                  style={styles.suggestionImage}
                />
                <Text style={styles.suggestionText}>In The Stars</Text>
                <Text style={styles.suggestionSubText}>Benson Boone</Text>
              </View>
            </ScrollView>
          </View>

          {/* Charts Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Charts</Text>
            <ScrollView horizontal>
              <View style={styles.chartItem}>
                <Text style={styles.chartTitle}>Top 50</Text>
                <Text style={styles.chartSubtitle}>Canada</Text>
              </View>
              <View style={styles.chartItem}>
                <Text style={styles.chartTitle}>Top 50</Text>
                <Text style={styles.chartSubtitle}>Global</Text>
              </View>
            </ScrollView>
          </View>

          {/* Trending Albums Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trending albums</Text>
            <ScrollView horizontal>
              <View style={styles.albumItem}>
                <Image
                  source={{ uri: 'https://example.com/album1.jpg' }}
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>ME</Text>
                <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
              </View>
              <View style={styles.albumItem}>
                <Image
                  source={{ uri: 'https://example.com/album2.jpg' }}
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>Magna nost</Text>
                <Text style={styles.albumArtist}>Brian Thomas</Text>
              </View>
            </ScrollView>
          </View>

          {/* Popular Artists Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular artists</Text>
            <ScrollView horizontal>
              <View style={styles.artistItem}>
                <Image
                  source={{ uri: 'https://example.com/artist1.jpg' }}
                  style={styles.artistImage}
                />
                <Text style={styles.artistName}>Jennifer Wilson</Text>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
      <View>
        <BottomMenu />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: { fontSize: 18, color: '#333' },
  username: { fontSize: 24, fontWeight: 'bold' },
  profilePic: { width: 40, height: 40, borderRadius: 20 },

  searchBar: { paddingHorizontal: 16, paddingVertical: 8 },
  searchInput: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 8 },

  section: { marginTop: 20, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  suggestionItem: { marginRight: 10, alignItems: 'center' },
  suggestionImage: { width: 120, height: 120, borderRadius: 8 },
  suggestionText: { fontWeight: 'bold', marginTop: 8 },
  suggestionSubText: { color: '#555' },

  chartItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
  },
  chartTitle: { fontSize: 18, fontWeight: 'bold' },
  chartSubtitle: { color: '#777' },

  albumItem: { marginRight: 10 },
  albumImage: { width: 120, height: 120, borderRadius: 8 },
  albumTitle: { fontWeight: 'bold', marginTop: 8 },
  albumArtist: { color: '#555' },

  artistItem: { alignItems: 'center', marginRight: 10 },
  artistImage: { width: 80, height: 80, borderRadius: 40 },
  artistName: { marginTop: 8, fontWeight: 'bold' },
  followButton: {
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#1e90ff',
    borderRadius: 16,
  },
  followButtonText: { color: '#fff' },
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
