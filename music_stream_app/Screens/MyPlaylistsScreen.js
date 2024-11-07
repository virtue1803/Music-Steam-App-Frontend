import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const PlaylistDetailsScreen = () => {
  const songs = [
    { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36' },
    // Thêm các bài hát khác nếu cần
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 70, height: 70, borderRadius: 8 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Top 50 - Canada</Text>
          <Text>1,234 likes • 05:10:18</Text>
          <Text>Daily chart-toppers update</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text>▶️</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
            <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 50, height: 50, borderRadius: 8 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.title}</Text>
              <Text>{item.artist}</Text>
              <Text>{item.plays} • {item.duration}</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text>⋮</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default PlaylistDetailsScreen;
