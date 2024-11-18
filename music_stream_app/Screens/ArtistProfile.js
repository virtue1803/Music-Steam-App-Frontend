import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { artistProfiles } from '../data/artistProfiles'; // Import dữ liệu nghệ sĩ
import { songs } from '../data/songs'; // Import dữ liệu bài hát

class ArtistListScreen extends React.Component {
  state = {
    selectedArtistId: null, // Không chọn nghệ sĩ ban đầu
  };

  // Lọc các bài hát của nghệ sĩ
  getPopularSongs = (artistId) => {
    return songs.filter((song) => song.artistId === artistId);
  };

  // Xử lý khi chọn nghệ sĩ
  handleArtistSelect = (id) => {
    this.setState({ selectedArtistId: id });
  };

  render() {
    const { selectedArtistId } = this.state;

    // Nếu có nghệ sĩ được chọn, hiển thị thông tin và bài hát của nghệ sĩ đó
    if (selectedArtistId) {
      const artist = artistProfiles.find(
        (artist) => artist.id === selectedArtistId
      );
      const popularSongs = this.getPopularSongs(selectedArtistId);

      return (
        <ScrollView style={styles.container}>
          {/* Thông tin nghệ sĩ */}
          <View style={styles.profileSection}>
            <Image source={artist.image} style={styles.profileImage} />
            <Text style={styles.name}>{artist.name}</Text>
            <Text style={styles.bio}>{artist.bio}</Text>
          </View>

          {/* Bài hát của nghệ sĩ */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Songs</Text>
            {popularSongs.length > 0 ? (
              popularSongs.map((song, index) => (
                // Trong ArtistListScreen.js
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('PlayAudioScreen', { song })
                    
                  }
                  style={styles.songRow}>
                  <Text style={styles.songTitle}>{song.title}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.errorText}>
                Không có bài hát cho nghệ sĩ này.
              </Text>
            )}
          </View>

          {/* Quay lại danh sách nghệ sĩ */}
          <TouchableOpacity
            onPress={() => this.setState({ selectedArtistId: null })}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Artist List</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }

    // Nếu chưa chọn nghệ sĩ, hiển thị danh sách nghệ sĩ
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Danh sách nghệ sĩ</Text>
        {artistProfiles.map((artist) => (
          <TouchableOpacity
            key={artist.id}
            onPress={() => this.handleArtistSelect(artist.id)}
            style={styles.artistItem}>
            <Image source={artist.image} style={styles.artistImage} />
            <Text style={styles.artistName}>{artist.name}</Text>
          </TouchableOpacity>
        ))}
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
  bio: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
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
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  playIcon: {
    marginLeft: 10,
  },
  backButton: {
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#1DB954',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
  artistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  artistName: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default ArtistListScreen;
