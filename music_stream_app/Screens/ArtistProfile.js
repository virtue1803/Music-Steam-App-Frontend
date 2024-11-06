import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Data arrays with image paths
const popularSongs = [
  { name: "Let you free", image: require('../assets/Artist Profile/Image 66.png') },
  { name: "Blinding Lights", image: require('../assets/Artist Profile/Image 67.png') },
  { name: "Levitating", image: require('../assets/Artist Profile/Image 68.png') },
  { name: "Astronaut in the Ocean", image: require('../assets/Artist Profile/Image 69.png') },
  { name: "Dynamite", image: require('../assets/Artist Profile/Image 70.png') },
];

const albums = [
  { name: "ME", artist: "Jessica Gonzalez", image: require('../assets/Artist Profile/Image 71.png') },
  { name: "Magna nost", artist: "Jessica Gonzalez", image: require('../assets/Artist Profile/Image 72.png') },
  { name: "Proident", artist: "Jessica Gonzalez", image: require('../assets/Artist Profile/Image 77.png') },
];

const fansAlsoLike = [
  { name: "Magna nost", artist: "Jessica Gonzalez", image: require('../assets/Artist Profile/Image 74.png') },
  { name: "Exercitat", artist: "Brian Harris", image: require('../assets/Artist Profile/Image 75.png') },
  { name: "Tempor", artist: "Tyler Adams", image: require('../assets/Artist Profile/Image 76.png') },
];

class ProfileScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/Artist Profile/Image 63.png')} style={styles.profileImage} />
          <Text style={styles.name}>Ryan Young</Text>
          <Text style={styles.followers}>65.1k Followers</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <Ionicons name="play-circle" size={50} color="black" style={styles.playIcon} />
        </View>

        {/* Popular Songs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular</Text>
          {popularSongs.map((song, index) => (
            <View key={index} style={styles.songRow}>
              <Image source={song.image} style={styles.songImage} />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.name}</Text>
                <Text style={styles.songDetails}>Ryan Young • 3:25</Text>
              </View>
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </View>
          ))}
        </View>

        {/* Albums Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Albums</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {albums.map((album, index) => (
              <View key={index} style={styles.album}>
                <Image source={album.image} style={styles.albumImage} />
                <Text style={styles.albumTitle}>{album.name}</Text>
                <Text style={styles.albumArtist}>{album.artist}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Fans Also Like Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fans also like</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {fansAlsoLike.map((fan, index) => (
              <View key={index} style={styles.fan}>
                <Image source={fan.image} style={styles.fanImage} />
                <Text style={styles.fanName}>{fan.name}</Text>
                <Text style={styles.fanArtist}>{fan.artist}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  followers: {
    fontSize: 16,
    color: '#666',
  },
  followButton: {
    backgroundColor: '#1DB954',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  playIcon: {
    marginTop: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songInfo: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songDetails: {
    fontSize: 14,
    color: '#666',
  },
  album: {
    alignItems: 'center',
    marginRight: 15,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  albumArtist: {
    fontSize: 12,
    color: '#666',
  },
  fan: {
    alignItems: 'center',
    marginRight: 15,
  },
  fanImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  fanName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  fanArtist: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProfileScreen;
