import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Search = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const navigation = useNavigation();

  const tags = ["All", "Tracks", "Albums", "Artists"];

  const artist = {
    name: 'Mer Watson',
    followers: '1.234K Followers',
    profilePic: require('../assets/Audio Listing - Search Results/Image 85.png'),
  };

  const allData = [
    { id: '1', title: 'Me', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', image: require('../assets/Audio Listing - Search Results/Image 83.png') },
    { id: '2', title: 'Me Inc', artist: 'Anthony Taylor', plays: '68M', duration: '3:35', image: require('../assets/Audio Listing - Search Results/Image 84.png') },
    { id: '3', title: 'Dozz me', artist: 'Brian Bailey', plays: '93M', duration: '4:39', image: require('../assets/Audio Listing - Search Results/Image 86.png') },
    { id: '4', title: 'Eastss me', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', image: require('../assets/Audio Listing - Search Results/Image 87.png') },
    { id: '5', title: 'Me Ali', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', image: require('../assets/Audio Listing - Search Results/Image 88.png') },
    { id: '6', title: 'Me quis a', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', image: require('../assets/Audio Listing - Search Results/Image 89.png') },
    { id: '7', title: 'Me light', artist: 'John Smith', plays: '81M', duration: '5:15', image: require('../assets/Audio Listing - Search Results/Image 90.png') },
  ];

  const getData = () => {
    switch (selectedTab) {
      case 'Tracks':
        return allData.filter((item, index) => index < 3); // Chỉ hiển thị một số bài hát để làm ví dụ
      case 'Albums':
        return allData.slice(3, 5); // Chỉ hiển thị một số album để làm ví dụ
      case 'Artists':
        return [artist];
      default:
        return allData;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 }}>
        <TextInput
          style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 15, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, fontSize: 16 }}
          placeholder="Search"
        />
        <TouchableOpacity style={{ marginLeft: 8 }}>
          <Text style={{ fontSize: 18 }}>✖️</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        {tags.map((tag) => (
          <TouchableOpacity key={tag} onPress={() => setSelectedTab(tag)}>
            <Text style={{ fontSize: 16, fontWeight: selectedTab === tag ? 'bold' : 'normal', color: selectedTab === tag ? '#00BFFF' : '#888' }}>
              {tag}
            </Text>
            {selectedTab === tag && <View style={{ height: 2, backgroundColor: '#00BFFF', marginTop: 4 }} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Artist Follow Section */}
      {selectedTab === 'All' && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
          <Image source={artist.profilePic} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{artist.name}</Text>
            <Text style={{ color: '#888' }}>{artist.followers}</Text>
          </View>
          <TouchableOpacity style={{ borderColor: '#888', borderWidth: 1, borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5 }}>
            <Text style={{ color: '#00BFFF', fontSize: 16 }}>Follow</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Song List */}
      <FlatList
        data={getData()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PlayAudio', item)}
            style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 16, alignItems: 'center' }}
          >
            <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: '#888' }}>{item.artist}</Text>
              <Text style={{ color: '#888', fontSize: 12 }}>{item.plays} • {item.duration}</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
              <Icon name="more-vert" size={24} color="#888" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
