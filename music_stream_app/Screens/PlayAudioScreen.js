// screens/MusicPlayerScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function MusicPlayerScreen({ route }) {
  const { song } = route.params; // Nhận song từ route.params
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    if (sound === null) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.uri },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseSound = async () => {
    if (sound !== null) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (sound !== null) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing: {song.title}</Text>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={isPlaying ? pauseSound : playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
