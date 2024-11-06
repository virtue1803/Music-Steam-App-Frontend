import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Bài đăng đầu tiên */}
      <View style={styles.postContainer}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/Feed - Audio Listing/Avatar 4.png')} style={styles.profileImage} />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Jessica Gonzalez</Text>
            <Text style={styles.postInfo}>Posted a track • 3d</Text>
          </View>
        </View>
        <Image source={require('../assets/Feed - Audio Listing/Image 93.png')} style={styles.postImage} />
        <View style={styles.postDetails}>
          <Text style={styles.trackTitle}>FLOWER</Text>
          <Text style={styles.artistName}>Jessica Gonzalez</Text>
          <View style={styles.stats}>
            <FontAwesome name="play" size={14} color="#fff" />
            <Text style={styles.statText}>125</Text>
            <Text style={styles.statText}>•</Text>
            <Text style={styles.statText}>05:15</Text>
          </View>
        </View>
        <View style={styles.postActions}>
          <TouchableOpacity><FontAwesome name="heart-o" size={18} color="#777" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="comment-o" size={18} color="#777" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="share" size={18} color="#777" /></TouchableOpacity>
        </View>
      </View>

      {/* Bài đăng thứ hai */}
      <View style={styles.postContainer}>
        <View style={styles.userInfo}>
           <Image source={require('../assets/Feed - Audio Listing/Avatar 5.png')} style={styles.profileImage} />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>William King</Text>
            <Text style={styles.postInfo}>Posted a track • 5d</Text>
          </View>
        </View>
        <Image source={require('../assets/Feed - Audio Listing/Image 94.png')} style={styles.postImage} />
        <View style={styles.postDetails}>
          <Text style={styles.trackTitle}>Me</Text>
          <Text style={styles.artistName}>William King</Text>
          <View style={styles.stats}>
            <FontAwesome name="play" size={14} color="#fff" />
            <Text style={styles.statText}>245</Text>
            <Text style={styles.statText}>•</Text>
            <Text style={styles.statText}>05:15</Text>
          </View>
        </View>
        <View style={styles.postActions}>
          <TouchableOpacity><FontAwesome name="heart-o" size={18} color="#777" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="comment-o" size={18} color="#777" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="share" size={18} color="#777" /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50
  },
  postContainer: {
    margin: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postInfo: {
    color: '#777',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  postDetails: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  trackTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  artistName: {
    color: '#ddd',
    fontSize: 14,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statText: {
    color: '#fff',
    marginHorizontal: 5,
    fontSize: 12,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
});
