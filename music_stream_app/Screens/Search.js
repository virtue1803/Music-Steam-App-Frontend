import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResultsScreen = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const navigation = useNavigation();

  // Dữ liệu giả cho từng tab với URL nhạc
  const tracksData = [
    { id: '1', title: 'City of Stars', artist: 'Ryan Gosling ft. Emma Stone', plays: '2.1M', duration: '3:36', url: 'https://www.nhaccuatui.com/bai-hat/city-of-stars-from-la-la-land-soundtrack-ryan-gosling-ft-emma-stone.tRE4ZrubnEzb.html' },
    { id: '2', title: 'Shallow', artist: 'Lady Gaga ft. Bradley Cooper', plays: '1.5M', duration: '3:45', url: 'https://www.nhaccuatui.com/bai-hat/shallow-radio-edit-lady-gaga-ft-bradley-cooper.6IL4W7BvPzm0.html' },
    { id: '3', title: 'Always Remember Us This Way', artist: 'Lady Gaga', plays: '3.2M', duration: '4:00', url: 'https://www.nhaccuatui.com/bai-hat/always-remember-us-this-way-lady-gaga.kr64z1ZHGyf5.html' },
    { id: '4', title: 'My Heart Will Go On', artist: 'Celine Dion', plays: '900K', duration: '3:21', url: 'https://www.nhaccuatui.com/bai-hat/my-heart-will-go-on-love-theme-from-titanic-celine-dion.hd94Jl6xoZix.html' },
    { id: '5', title: 'Speechless', artist: 'Naomi Scott', plays: '1.2M', duration: '2:58', url: 'https://www.nhaccuatui.com/bai-hat/speechless-full-from-aladdinsoundtrack-version-naomi-scott.ag7rg21KcX18.html' },
  ];

  const albumsData = [
    { id: '6', title: 'Dance The Night', artist: 'Dua Lipa', plays: '4.3M', duration: '3:50', url: 'https://www.nhaccuatui.com/bai-hat/dance-the-night-from-barbie-the-album-dua-lipa.e2dypeo6Zpg5.html' },
    { id: '7', title: 'If I Ain\'t Got You', artist: 'Alicia Keys', plays: '2.9M', duration: '4:10', url: 'https://www.nhaccuatui.com/bai-hat/if-i-aint-got-you-orchestral-alicia-keys-ft-queen-charlottes-global-orchestra.YD7b9iiCqe5u.html' },
    { id: '8', title: 'Here I Am', artist: 'Dolly Parton ft. Sia', plays: '5.1M', duration: '3:40', url: 'https://www.nhaccuatui.com/bai-hat/here-i-am-from-the-dumplin-original-motion-picture-soundtrack-dolly-parton-ft-sia.6VoDbMWV8Wbo.html' },
  ];

  const artistsData = [
    { id: '9', title: 'Artist Track One', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', url: 'https://www.nhaccuatui.com/bai-hat/city-of-stars-from-la-la-land-soundtrack-ryan-gosling-ft-emma-stone.tRE4ZrubnEzb.html' },
    { id: '10', title: 'Artist Track Two', artist: 'Anthony Taylor', plays: '2.8M', duration: '3:55', url: 'https://www.nhaccuatui.com/bai-hat/shallow-radio-edit-lady-gaga-ft-bradley-cooper.6IL4W7BvPzm0.html' },
    { id: '11', title: 'Artist Track Three', artist: 'Brian Bailey', plays: '3.5M', duration: '4:22', url: 'https://www.nhaccuatui.com/bai-hat/always-remember-us-this-way-lady-gaga.kr64z1ZHGyf5.html' },
  ];

  const allData = [
    ...tracksData,
    ...albumsData,
    ...artistsData.slice(0, 3), // Chỉ lấy một bài hát từ từng nghệ sĩ trong Artists
  ];

  const getData = () => {
    switch (selectedTab) {
      case 'Tracks':
        return tracksData;
      case 'Albums':
        return albumsData;
      case 'Artists':
        return artistsData;
      default:
        return allData;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <TextInput
        style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 8 }}
        placeholder="Search"
      />
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => setSelectedTab('All')}>
          <Text style={{ fontWeight: selectedTab === 'All' ? 'bold' : 'normal' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Tracks')}>
          <Text style={{ fontWeight: selectedTab === 'Tracks' ? 'bold' : 'normal' }}>Tracks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Albums')}>
          <Text style={{ fontWeight: selectedTab === 'Albums' ? 'bold' : 'normal' }}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Artists')}>
          <Text style={{ fontWeight: selectedTab === 'Artists' ? 'bold' : 'normal' }}>Artists</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={getData()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PlayAudio', item)}
            style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}
          >
            <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 50, height: 50, borderRadius: 8 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.title}</Text>
              <Text>{item.artist}</Text>
              <Text>{item.plays} • {item.duration}</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text>⋮</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchResultsScreen;
