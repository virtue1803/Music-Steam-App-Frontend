import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { artistProfiles } from '../data/artistProfiles';
import { songs } from '../data/songs';

const ArtistProfile = ({ route, navigation }) => {
  const { artistId } = route.params;
  const artist = artistProfiles.find((artist) => artist.id === artistId);

  // Lọc danh sách bài hát của nghệ sĩ
  const artistSongs = songs.filter((song) => song.artistId === artistId);

  return (
    <ScrollView style={styles.container}>
      {/* Thông tin nghệ sĩ */}
      <View style={styles.profileSection}>
        <Image source={{ uri: artist.image }} style={styles.profileImage} />
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.bio}>{artist.bio}</Text>
      </View>

      {/* Danh sách bài hát */}
      <View style={styles.songSection}>
        <Text style={styles.sectionTitle}>Bài hát nổi bật</Text>
        {artistSongs.length > 0 ? (
          artistSongs.map((song, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('PlayAudioScreen', { song })}
              style={styles.songRow}>
              <Text style={styles.songTitle}>{song.title}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.errorText}>Không có bài hát cho nghệ sĩ này.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  songSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  songRow: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Hiệu ứng đổ bóng cho Android
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ArtistProfile;
