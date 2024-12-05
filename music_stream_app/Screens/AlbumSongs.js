import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { songs } from '../data/songs'; // Dữ liệu các bài hát
import { albums } from '../data/albums'; // Dữ liệu album

const AlbumSong = ({ route, navigation }) => {
  // Lấy idAlbum từ route params
  const { albumId } = route.params;

  // Lọc album từ danh sách album dựa trên albumId
  const album = albums.find((a) => a.idAlbum === albumId);

  // Lọc các bài hát của album dựa trên idAlbum
  const albumSongs = songs.filter((song) => album.idSongs.includes(song.id));

  return (
    <View style={styles.container}>
      <Image source={{ uri: album.image }} style={styles.albumImage} />
      <Text style={styles.albumTitle}>{album.name}</Text>

      <ScrollView style={styles.songList}>
        {albumSongs.map((song) => (
          <TouchableOpacity
            key={song.id}
            style={styles.songItem}
            onPress={() =>
              navigation.navigate('PlayAudioScreen', { song })
            }>
            <Text style={styles.songTitle}>{song.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  albumImage: { width: '100%', height: 250, borderRadius: 10, marginBottom: 16 },
  albumTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  songList: { flex: 1 },
  songItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  songTitle: { fontSize: 16 },
});

export default AlbumSong;
