import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const MyPlaylistsScreen = () => {
  const playlists = [
    { id: '1', title: 'Ipsum sit nulla', creator: 'Ashley Scott', songs: '12 songs' },
    // Thêm các playlist khác nếu cần
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Your playlists</Text>
      <FlatList
        data={playlists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
            <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 50, height: 50, borderRadius: 8 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.title}</Text>
              <Text>{item.creator} • {item.songs}</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: '#000', borderRadius: 50, padding: 10 }}>
        <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyPlaylistsScreen;
