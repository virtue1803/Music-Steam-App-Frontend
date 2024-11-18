import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { artistProfiles } from '../data/artistProfiles'; // Dữ liệu nghệ sĩ
import { songs } from '../data/songs'; // Dữ liệu bài hát

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('artist'); // Lưu tab hiện tại, mặc định là artist
  const [filteredArtists, setFilteredArtists] = useState(artistProfiles);
  const [filteredSongs, setFilteredSongs] = useState(songs);

  // Tìm kiếm theo tên nghệ sĩ
  const handleSearch = (text) => {
    setSearchText(text);

    if (selectedTab === 'artist') {
      const filtered = artistProfiles.filter((artist) =>
        artist.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredArtists(filtered);
    } else {
      const filtered = songs.filter((song) =>
        song.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredSongs(filtered);
    }
  };

  // Cập nhật kết quả tìm kiếm khi chuyển tab
  useEffect(() => {
    if (selectedTab === 'artist') {
      setFilteredArtists(
        artistProfiles.filter((artist) =>
          artist.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      setFilteredSongs(
        songs.filter((song) =>
          song.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      {/* Ô tìm kiếm */}
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm nghệ sĩ hoặc bài hát..."
        value={searchText}
        onChangeText={handleSearch}
      />

      {/* Tab điều hướng: Artist và Song */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'artist' && styles.selectedTab]}
          onPress={() => setSelectedTab('artist')}
        >
          <Text style={[styles.tabText, selectedTab === 'artist' && styles.selectedTabText]}>Artist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'song' && styles.selectedTab]}
          onPress={() => setSelectedTab('song')}
        >
          <Text style={[styles.tabText, selectedTab === 'song' && styles.selectedTabText]}>Song</Text>
        </TouchableOpacity>
      </View>

      {/* Hiển thị kết quả tìm kiếm */}
      <FlatList
        data={selectedTab === 'artist' ? filteredArtists : filteredSongs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (selectedTab === 'artist') {
                navigation.navigate('ArtistProfile', { artistId: item.id });
              } else {
                // Chuyển đến màn hình phát nhạc với thông tin bài hát
                navigation.navigate('PlayAudioScreen', { song: item });
              }
            }}
          >
            {selectedTab === 'artist' ? (
              <>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.name}</Text>
              </>
            ) : (
              <Text style={styles.itemText}>{item.title}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1DB954',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  selectedTabText: {
    color: '#1DB954',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});
