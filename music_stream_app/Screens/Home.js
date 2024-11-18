import React, {useState} from 'react';
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
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomMenu from './BottomMenu.js';
import ProfileUser from "./ProfileUser/ProfileUser"; // Import màn hình Logout
import { artistProfiles } from '../data/artistProfiles';

export default function CounterApp({ navigation }) {

 const [logoutVisible, setLogoutVisible] = useState(false); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <ScrollView style={styles.container}>
          {/* Header */}
          <View style={styles.header1}>
            <StatusBar barStyle="dark-content" />
            {/* Logo */}
            <Image
              source={require('../assets/Home - Audio Listing/Image 36.png')} // Replace with your logo image URL
              style={styles.logo}
            />

            <View style={styles.rightIcons}>
              {/* Notification Icon */}
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications" size={24} color="gray" />
              </TouchableOpacity>

              {/* Profile Image */}
              <TouchableOpacity style={styles.profileButton}  onPress={() => setLogoutVisible(true)}>
                <Image
                  source={require('../assets/Home - Audio Listing/Avatar 3.png')} // Replace with your profile image URL
                  style={styles.profileImage}
                />
              </TouchableOpacity>
               {/* Modal Logout */}
      <ProfileUser
        visible={logoutVisible}
        onClose={() => setLogoutVisible(false)} // Đóng modal khi nhấn Hủy
        navigation={navigation}
      />
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.username}>Ashley Scott</Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="gray" />
            </TouchableOpacity>
            <TextInput
              placeholder="What do you want to listen to"
              style={styles.searchInput}
            />
          </View>

          {/* Suggestions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Suggestions for you</Text>
            {/*showsHorizontalScrollIndicator={false}*/}
            <ScrollView horizontal >
              <View style={styles.suggestionItem}>
                <Image
                  source={require('../assets/Home - Audio Listing/Container 26.png')}
                  style={styles.suggestionImage}
                />
              </View>
              <View style={styles.suggestionItem}>
                <Image
                  source={require('../assets/Home - Audio Listing/Container 27.png')}
                  style={styles.suggestionImage}
                />
              </View>
            </ScrollView>
          </View>

          {/* Charts Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Charts</Text>
            <ScrollView horizontal>
              {/*<View style={styles.chartItem}>
                <Text style={styles.chartTitle}>Top 50</Text>
                <Text style={styles.chartSubtitle}>Canada</Text>
              </View>*/}
              <View style={styles.chartItem}>
                  <Image
                  source={require('../assets/Home - Audio Listing/Container 31.png')}
                  style={styles.suggestionImage}
                />
                <Text>Daily chart-toppers update</Text>
              </View>
              <View style={styles.chartItem}>
                  <Image
                  source={require('../assets/Home - Audio Listing/Container 32.png')}
                  style={styles.suggestionImage}
                />
                <Text>Daily chart-toppers update</Text>
              </View>
              <View style={styles.chartItem}>
                  <Image
                  source={require('../assets/Home - Audio Listing/Container 33.png')}
                  style={styles.suggestionImage}
                />
                <Text>Daily chart-toppers update</Text>
              </View>
            </ScrollView>
          </View>

          {/* Trending Albums Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trending albums</Text>
            <ScrollView horizontal>
              <View style={styles.albumItem}>
                <Image
                 source={require('../assets/Home - Audio Listing/Image 45.png')}
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>ME</Text>
                <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
              </View>
              <View style={styles.albumItem}>
                <Image
                  source={require('../assets/Home - Audio Listing/Image 46.png')}
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>Magna nost</Text>
                <Text style={styles.albumArtist}>Brian Thomas</Text>
              </View>
              <View style={styles.albumItem}>
                <Image
                  source={require('../assets/Home - Audio Listing/Image 47.png')}
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>Magna nost</Text>
                <Text style={styles.albumArtist}>Brian Thomas</Text>
              </View>
            </ScrollView>
          </View>

          {/* Popular Artists Section */}
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Artists</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {artistProfiles.map((artist) => (
              <TouchableOpacity
                key={artist.id}
                style={styles.artistItem}
                onPress={() => navigation.navigate('ArtistProfile', { artistId: artist.id })}
              >
                <Image source={artist.image} style={styles.artistImage} />
                <Text style={styles.artistName}>{artist.name}</Text>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
          <View style={{padding:20}} ></View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: '#fff',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight || 0,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 15,
  },
  profileButton: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  header: {
    justifyContent: 'space-between',
    padding: 16,
  },
  greeting: { fontSize: 18, color: '#333' },
  username: { fontSize: 24, fontWeight: 'bold' },

  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#f0f0f0',
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  searchInput: { padding: 10, borderRadius: 8, width: '100%' },

  section: { marginTop: 20, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  suggestionItem: { marginRight: 10, alignItems: 'center', height: 300 },
  suggestionImage: { width: 200, borderRadius: 8 },

  chartItem: {
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',

    
  },

  albumItem: { marginRight: 10 , width:130},
  albumImage: { width: 120, height: 120, borderRadius: 8 },
  albumTitle: { fontWeight: 'bold', marginTop: 8 },
  albumArtist: { color: '#555' },

  artistItem: { alignItems: 'center', marginRight: 10 , width:120},
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
});
