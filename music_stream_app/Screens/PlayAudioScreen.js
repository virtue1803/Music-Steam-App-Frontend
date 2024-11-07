import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

const PlayAudioScreen = ({ route }) => {
  const { title, artist, url } = route.params; // Nhận các tham số từ route.params
  const playbackState = usePlaybackState();

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();

      // Cập nhật các options sử dụng TrackPlayer.CAPABILITY_PLAY
      await TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_STOP,
        ],
      });

      await TrackPlayer.add({
        id: 'trackId',
        url: url,
        title: title,
        artist: artist,
        artwork: 'https://picsum.photos/200', // Ảnh ngẫu nhiên cho bài hát
      });
    };

    setupPlayer();

    // Dùng reset thay vì destroy để xóa TrackPlayer khi component bị huỷ
    return () => {
      TrackPlayer.reset();
    };
  }, [title, artist, url]);

  const handlePlayPause = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Image source={{ uri: 'https://picsum.photos/200' }} style={{ flex: 1, resizeMode: 'cover' }} />
      <View style={{ position: 'absolute', bottom: 40, left: 20, right: 20 }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
        <Text style={{ color: '#fff', marginBottom: 20 }}>{artist}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity>
            <Text style={{ color: '#fff' }}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#fff' }}>⏮️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause}>
            <Text style={{ color: '#fff', fontSize: 36 }}>{playbackState === State.Playing ? '⏸️' : '▶️'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#fff' }}>⏭️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#fff' }}>🔁</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayAudioScreen;
