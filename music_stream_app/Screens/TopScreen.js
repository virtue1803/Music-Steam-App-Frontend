import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', playCount: '2.1M', duration: '3:36', cover: 'https://example.com/flower.jpg' },
  { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', playCount: '689M', duration: '3:35', cover: 'https://example.com/shapeofyou.jpg' },
  { id: '3', title: 'Blinding Lights', artist: 'Brian Bailey', playCount: '93M', duration: '4:39', cover: 'https://example.com/blindinglights.jpg' },
  // Add more items as needed
];

export default function TopSongsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.songContainer}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
      <View style={styles.extraInfo}>
        <Text style={styles.playCount}>{item.playCount}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>⋮</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top 50 - Canada</Text>
        <Text style={styles.subHeader}>Daily chart-toppers update</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' , marginTop:50},
  header: { padding: 16, backgroundColor: '#f5f5f5', alignItems: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  subHeader: { fontSize: 14, color: '#888' },
  songContainer: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  coverImage: { width: 50, height: 50, borderRadius: 4 },
  songDetails: { flex: 1, marginLeft: 10 },
  songTitle: { fontSize: 16, fontWeight: 'bold' },
  artist: { fontSize: 14, color: '#888' },
  extraInfo: { alignItems: 'flex-end' },
  playCount: { fontSize: 12, color: '#888' },
  duration: { fontSize: 12, color: '#888' },
  moreButton: { paddingHorizontal: 10 },
  moreText: { fontSize: 20, color: '#888' },
});
