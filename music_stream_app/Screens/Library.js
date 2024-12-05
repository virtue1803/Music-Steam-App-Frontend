import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Ánh xạ hình ảnh
const imageMap = {
  "Image 101.png": require("../assets/My Library/Image 101.png"),
  "Image 102.png": require("../assets/My Library/Image 102.png"),
  "Image 103.png": require("../assets/My Library/Image 103.png"),
  "Image 104.png": require("../assets/My Library/Image 104.png"),
  "Image 105.png": require("../assets/My Library/Image 105.png"),
  "Image 106.png": require("../assets/My Library/Image 106.png"),
  // Thêm các ảnh tại đây...
};

const artist = {
  name: 'Mer Watson',
  followers: '1.234K Followers',
  profilePic: require('../assets/My Library/Image 107.png'),
};

const Library = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [allSongsData, setAllSongsData] = useState([]);
  const [tags, setTags] = useState(['All']);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('http://192.168.1.10:8080/api/songs');
        const data = await response.json();

        const transformedData = data.map((song) => ({
          id: song.id,
          title: song.title,
          artist: song.artist.name,
          plays: song.playCount,
          duration: song.duration,
          liked: song.liked,
          tag: song.tags,
          image: imageMap[song.image.split('/').pop()], // Tra cứu từ ánh xạ hình ảnh
          lyrics: song.lyrics,
          releaseDate: song.releaseDate,
          language: song.language,
          genre: song.genre,
          album: song.album?.title || null,
        }));

        const uniqueTags = ['All', ...new Set(data.flatMap((song) => song.tags.split(',').map((tag) => tag.trim())))];

        setAllSongsData(transformedData);
        setTags(uniqueTags);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const getFilteredData = () => {
    if (selectedTag === 'All') return allSongsData;
    return allSongsData.filter((song) => song.tag.split(',').map((tag) => tag.trim()).includes(selectedTag));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Library</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50, marginBottom: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 }}
        >
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
              <Text
                style={{
                  fontWeight: selectedTag === tag ? 'bold' : 'normal',
                  color: selectedTag === tag ? '#000' : '#888',
                }}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Following Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 }}>
        <Image source={artist.profilePic} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{artist.name}</Text>
          <Text style={{ color: '#777' }}>{artist.followers}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#000', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16 }}>
          <Text style={{ color: '#fff' }}>Follow</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={getFilteredData()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PlayAudio', {
                title: item.title,
                artist: item.artist,
                image: item.image,
                plays: item.plays,
                duration: item.duration,
              })
            }
            style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}
          >
            <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 16 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: '#777' }}>{item.artist}</Text>
              <Text style={{ color: '#777' }}>
                {item.plays} {item.duration ? `• ${item.duration}` : ''}
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={{ fontSize: 24, color: item.liked ? 'blue' : '#ddd' }}>💙</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Library;
