import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Library = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const navigation = useNavigation();

  const tags = ["All", "Playlists", "New tag", "Songs", "Albums", "Artists"];
  const artist = {
    name: 'Mer Watson',
    followers: '1.234K Followers',
    profilePic: require('../assets/My Library/Image 107.png'),
  };

  const allSongsData = [
    { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', liked: true, tag: 'Songs', image: require('../assets/My Library/Image 101.png') },
    { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', liked: true, tag: 'Songs', image: require('../assets/My Library/Image 102.png') },
    { id: '3', title: 'Blinding Lights', artist: 'Ashley Scott', plays: '4 songs', duration: '', liked: false, tag: 'Playlists', image: require('../assets/My Library/Image 103.png') },
    { id: '4', title: 'Levitating', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', liked: false, tag: 'Songs', image: require('../assets/My Library/Image 104.png') },
    { id: '5', title: 'Astronaut in the Ocean', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', liked: true, tag: 'Albums', image: require('../assets/My Library/Image 105.png') },
    { id: '6', title: 'Dynamite', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', liked: true, tag: 'Albums', image: require('../assets/My Library/Image 106.png') },
  ];

  const getFilteredData = () => {
    if (selectedTag === 'All') return allSongsData;
    return allSongsData.filter((song) => song.tag === selectedTag);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Library</Text>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {tags.map((tag, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedTag(tag)}
              style={[
                styles.tag,
                { backgroundColor: selectedTag === tag ? '#ccc' : '#f0f0f0' },
              ]}
            >
              <Text style={{ fontWeight: selectedTag === tag ? 'bold' : 'normal', color: selectedTag === tag ? '#000' : '#888' }}>
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Following Section */}
      <View style={styles.followingSection}>
        <Image source={artist.profilePic} style={styles.profilePic} />
        <View style={{ flex: 1 }}>
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.followerCount}>{artist.followers}</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Song List */}
      <FlatList
        data={getFilteredData()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log('Navigating to PlayAudio with item:', item); // Debug log
              navigation.navigate('PlayAudio', {
                title: item.title,
                artist: item.artist,
                image: item.image,
                plays: item.plays,
                duration: item.duration,
              });
            }}
            style={styles.songItem}
          >
            <Image source={item.image} style={styles.songImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
              <Text style={styles.songPlays}>{item.plays} {item.duration ? `• ${item.duration}` : ''}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="heart" size={20} color={item.liked ? 'blue' : '#ddd'} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tagsContainer: {
    height: 50,
    marginBottom: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  followingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  followerCount: {
    color: '#777',
  },
  followButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  followButtonText: {
    color: '#fff',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#777',
  },
  songPlays: {
    color: '#777',
  },
});

export default Library;
