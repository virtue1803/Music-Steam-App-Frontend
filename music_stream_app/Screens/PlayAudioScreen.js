import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PlayAudioScreen = ({ route, navigation }) => {
  const { title, artist, image, plays, duration } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-down" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Play</Text>
        <View />
      </View>

      {/* Song Image */}
      <Image source={image} style={styles.songImage} />

      {/* Song Information */}
      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>{title}</Text>
        <Text style={styles.songArtist}>{artist}</Text>
      </View>

      {/* Progress Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#888888"
        thumbTintColor="#FFFFFF"
      />

      {/* Time */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>0:06</Text>
        <Text style={styles.timeText}>{duration}</Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Icon name="repeat" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-forward" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Social Actions */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <FontAwesome name="heart" size={18} color="#FFF" />
          <Text style={styles.socialText}> 12K</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comment" size={18} color="#FFF" />
          <Text style={styles.socialText}> 450</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="share" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  songImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  songInfoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  songTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#888',
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    color: '#888',
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  playButton: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  socialText: {
    color: '#FFF',
    fontSize: 16,
    paddingLeft: 4,
  },
});

export default PlayAudioScreen;
