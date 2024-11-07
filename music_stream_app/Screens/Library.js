import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const YourLibraryScreen = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ["All", "Playlists", "New tag", "Songs", "Albums", "Artists"];
  const artist = {
    name: 'Mer Watson',
    followers: '1.234K Followers',
    profilePic: 'https://picsum.photos/200',
  };

  const allSongsData = [
    { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', liked: true, tag: 'Songs' },
    { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', liked: true, tag: 'Songs' },
    { id: '3', title: 'Blinding Lights', artist: 'Ashley Scott', plays: '4 songs', duration: '', liked: false, tag: 'Playlists' },
    { id: '4', title: 'Levitating', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', liked: true, tag: 'Songs' },
    { id: '5', title: 'Astronaut in the Ocean', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', liked: true, tag: 'Albums' },
    { id: '6', title: 'Dynamite', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', liked: true, tag: 'Albums' },
  ];

  const getFilteredData = () => {
    if (selectedTag === 'All') return allSongsData;
    return allSongsData.filter((song) => song.tag === selectedTag);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Library</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <View style={{ height: 50, marginBottom: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 }}>
          {tags.map((tag, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedTag(tag)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: selectedTag === tag ? '#ccc' : '#f0f0f0',
                borderRadius: 16,
                marginRight: 8,
              }}
            >
              <Text style={{ fontWeight: selectedTag === tag ? 'bold' : 'normal', color: selectedTag === tag ? '#000' : '#888' }}>
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Following Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 }}>
        <Image source={{ uri: artist.profilePic }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{artist.name}</Text>
          <Text style={{ color: '#777' }}>{artist.followers}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#000', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16 }}>
          <Text style={{ color: '#fff' }}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Song List */}
      <FlatList
        data={getFilteredData()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
            <Image source={{ uri: 'https://picsum.photos/100' }} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 16 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: '#777' }}>{item.artist}</Text>
              <Text style={{ color: '#777' }}>{item.plays} {item.duration ? `• ${item.duration}` : ''}</Text>
            </View>
            <TouchableOpacity>
              <Text style={{ fontSize: 24, color: item.liked ? 'blue' : '#ddd' }}>💙</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      
    </View>
  );
};

export default YourLibraryScreen;
