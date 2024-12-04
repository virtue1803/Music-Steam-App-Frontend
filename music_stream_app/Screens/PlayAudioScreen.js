import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'; // Thêm Slider
import { songs } from '../data/songs'; // Import dữ liệu bài hát

export default function MusicPlayerScreen({ route }) {
  const { song: initialSong } = route.params; // Nhận thông tin bài hát từ route.params
  const [song, setSong] = useState(initialSong); // Bài hát hiện tại
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Mức âm lượng (0 đến 1)
  const [randomSongs, setRandomSongs] = useState([]); // Danh sách bài hát ngẫu nhiên

  // Phát nhạc
  const playSound = async (uri) => {
    if (sound !== null) {
      await sound.unloadAsync(); // Dọn dẹp âm thanh cũ
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true, volume }
    );
    setSound(newSound);
    setIsPlaying(true);
  };

  // Tạm dừng nhạc
  const pauseSound = async () => {
    if (sound !== null) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  // Điều chỉnh âm lượng
  const adjustVolume = async (value) => {
    setVolume(value);
    if (sound !== null) {
      await sound.setVolumeAsync(value);
    }
  };

  // Lấy danh sách bài hát ngẫu nhiên
  useEffect(() => {
    const shuffledSongs = songs.sort(() => 0.5 - Math.random()).slice(0, 20);
    setRandomSongs(shuffledSongs);
    playSound(initialSong.uri); // Phát bài hát đầu tiên khi mở màn hình
  }, []);

  // Dọn dẹp âm thanh khi thoát màn hình
  useEffect(() => {
    return () => {
      if (sound !== null) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  // Xử lý khi chọn bài hát
  const handleSongSelect = async (selectedSong) => {
    setSong(selectedSong);
    await playSound(selectedSong.uri); // Phát bài hát ngay lập tức
  };

  // Chuyển đến bài hát tiếp theo
  const handleNextSong = () => {
    const currentIndex = randomSongs.findIndex((item) => item.id === song.id);
    const nextIndex = (currentIndex + 1) % randomSongs.length;
    const nextSong = randomSongs[nextIndex];
    setSong(nextSong);
    playSound(nextSong.uri); // Phát bài hát tiếp theo
  };

  // Quay lại bài hát trước
  const handlePrevSong = () => {
    const currentIndex = randomSongs.findIndex((item) => item.id === song.id);
    const prevIndex = (currentIndex - 1 + randomSongs.length) % randomSongs.length;
    const prevSong = randomSongs[prevIndex];
    setSong(prevSong);
    playSound(prevSong.uri); // Phát bài hát trước
  };

  return (
    <View style={styles.container}>
      {/* Hiển thị bài hát đang phát */}
      <Text style={styles.nowPlaying}>Đang phát: {song.title}</Text>

      {/* Danh sách bài hát */}
      <ScrollView style={styles.songList}>
  {randomSongs.map((songItem) => (
    <TouchableOpacity
      key={songItem.id}
      style={[
        styles.songItem,
        songItem.id === song.id && styles.currentSongItem, // Áp dụng màu nền cho bài hát đang phát
      ]}
      onPress={() => handleSongSelect(songItem)}
    >
      <Text
        style={[
          styles.songTitle,
          songItem.id === song.id && styles.currentSongTitle, // Áp dụng màu chữ cho bài hát đang phát
        ]}
      >
        {songItem.title}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>


      {/* Các nút điều khiển */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrevSong}>
          <Ionicons name="play-skip-back" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseSound : () => playSound(song.uri)}>
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextSong}>
          <Ionicons name="play-skip-forward" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Thanh điều chỉnh âm lượng */}
      <View style={styles.volumeContainer}>
        <Ionicons name="volume-mute" size={20} color="#fff" />
        <Slider
          style={styles.volumeSlider}
          minimumValue={0}
          maximumValue={1}
          value={volume}
          onValueChange={adjustVolume}
          minimumTrackTintColor="#1db954" // Màu phần trượt đã chọn
          maximumTrackTintColor="#fff" // Màu phần trượt chưa chọn
          thumbTintColor="#1db954" // Màu nút trượt
        />
        <Ionicons name="volume-high" size={20} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Nền tối
  },
  nowPlaying: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  songList: {
    width: '90%',
    marginBottom: 30,
  },
  songItem: {
    padding: 15,
    backgroundColor: '#333', // Màu nền mặc định
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentSongItem: {
    backgroundColor: '#1db954', // Màu nền của bài hát đang phát
  },
  songTitle: {
    color: '#fff', // Màu chữ mặc định
    fontSize: 16,
  },
  currentSongTitle: {
    color: '#000', // Màu chữ của bài hát đang phát
    fontWeight: 'bold', // Chữ in đậm
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  volumeSlider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
});
