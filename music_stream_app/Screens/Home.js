import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileUser from './ProfileUser/ProfileUser'; // Import màn hình Logout
import { artistProfiles } from '../data/artistProfiles';
import { albums } from '../data/albums'; // Đường dẫn đến file album.js
import { songs } from '../data/songs'; 

export default function HomeScreen({ navigation }) {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [username, setUsername] = useState('');

  // Lấy tên người dùng từ AsyncStorage
  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };
    fetchUsername();
  }, []);

  // Component Section để tái sử dụng
  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );

  // Xử lý khi nhấn vào album
  const handleAlbumSelect = (albumId) => {
    // Lọc các bài hát trong album dựa trên idAlbum của album
    const albumData = albums.find((album) => album.idAlbum === albumId);
    if (albumData) {
      // Lọc bài hát trong album dựa trên idSongs
      const albumSongs = songs.filter((song) =>
        albumData.idSongs.includes(song.id)
      );

      // Điều hướng đến màn hình AlbumSongs và truyền dữ liệu bài hát
      navigation.navigate('AlbumSongs', { albumId, albumSongs });
    }
  };

  // Hàm lấy ngẫu nhiên 5 bài hát
  const getRandomSongs = () => {
    // Trộn mảng
    const shuffled = songs.sort(() => 0.5 - Math.random());
    // Lấy 5 phần tử đầu tiên
    return shuffled.slice(0, 5);
  };

  const randomSongs = getRandomSongs();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/Home - Audio Listing/Image 36.png')}
          style={styles.logo}
        />
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => setLogoutVisible(true)} // Hiển thị Modal Logout
          >
            <Image
              source={require('../assets/Home - Audio Listing/Avatar 3.png')} // Đường dẫn ảnh đại diện
              style={styles.profileImage}
            />
          </TouchableOpacity>

          {/* Modal Logout */}
          {logoutVisible && (
            <ProfileUser
              visible={logoutVisible}
              onClose={() => setLogoutVisible(false)}
              navigation={navigation}
              username={username} // Truyền username từ state
            />
          )}
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{username || 'User'}</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder="What do you want to listen to?"
            style={styles.searchInput}
          />
        </View>

        {/* Suggestions Section */}
        <Section title="Suggestions for you">
  <View>
    {randomSongs.map((song) => (
      <TouchableOpacity
        key={song.id}
        onPress={() => navigation.navigate('PlayAudioScreen', { song })}
        style={styles.songRow}>
        <Text style={styles.songTitle}>{song.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
</Section>

        {/* Charts Section */}
        <Section title="Charts">
          <Image
            source={require('../assets/Home - Audio Listing/Container 31.png')}
            style={styles.chartImage}
          />
          <Image
            source={require('../assets/Home - Audio Listing/Container 32.png')}
            style={styles.chartImage}
          />
        </Section>

        {/* Trending Albums */}
        <Section title="Trending Albums">
          {albums.map((album) => {
            // Tìm nghệ sĩ dựa trên idArtist của album
            const artist = artistProfiles.find(
              (artist) => artist.id === album.idArtist
            );

            return (
              <TouchableOpacity
                key={album.idAlbum}
                style={styles.albumItem}
                onPress={() =>
                  navigation.navigate('AlbumSongs', { albumId: album.idAlbum })
                }>
                <Image
                  source={{ uri: album.image }} // Sử dụng { uri: <URL> }
                  style={styles.albumImage}
                />
                <Text style={styles.albumTitle}>{album.name}</Text>
                {artist && <Text style={{fontSize:20}}>{artist.name}</Text>}
              </TouchableOpacity>
            );
          })}
        </Section>

        {/* Popular Artists */}
        <Section title="Popular Artists">
          {artistProfiles.map((artist) => (
            <TouchableOpacity
              key={artist.id}
              style={styles.artistItem}
              onPress={() =>
                navigation.navigate('ArtistProfile', { artistId: artist.id })
              }>
              <Image
                source={{ uri: artist.image }} // Sử dụng { uri: <URL> }
                style={styles.artistImage}
              />
              <Text style={styles.artistName}>{artist.name}</Text>
            </TouchableOpacity>
          ))}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
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
    flexDirection: 'column', // Đảm bảo các thành phần xếp dọc
    alignItems: 'flex-start', // Canh trái
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
  logo: { width: 30, height: 30, resizeMode: 'contain' },
  rightIcons: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { marginRight: 15 },
  profileImage: { width: 30, height: 30, borderRadius: 15 },
  greetingContainer: { marginVertical: 16 },
  greeting: { fontSize: 18, color: '#333' },
  username: { fontSize: 24, fontWeight: 'bold' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    borderRadius: 25,
    marginBottom: 20,
  },
  searchInput: { marginLeft: 10, flex: 1 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  suggestionImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  chartImage: { width: 120, height: 120, borderRadius: 8, marginRight: 10 },
  albumItem: {
    marginBottom: 16,
    width:150,
    marginRight:30,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  albumTitle: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: 'bold',
  },
  artistName: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  artistItem: { alignItems: 'center', marginRight: 10 },
  artistImage: { width: 80, height: 80, borderRadius: 40 },
  artistName: { marginTop: 8, fontWeight: 'bold' },
});
