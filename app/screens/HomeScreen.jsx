
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonBelowGreetings from '../../components/ButtonBelowGreetings';
import PlayList from '../../components/PlayList';
import RowList from '../../components/RowList';
import { LinearGradient } from 'expo-linear-gradient';
import ShowList from '../../components/ShowList';
import SongPlayer from '../../components/SongPlayer';
import TrackPlayer, { Capability, State, usePlaybackState, useProgress } from 'react-native-track-player';
import { songsList } from '../../constants/Songs';
import FloatingMusicPlayer from '../../components/FloatingMusicPlayer';

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(songsList);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePlayPause = async () => {
    if (playbackState.state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.skip(currentIndex);
      await TrackPlayer.play();
    }
  };

  useEffect(() => {
    if (State.Playing === playbackState) {
      if (progress.position.toFixed(0) === progress.duration.toFixed(0)) {
        if (currentIndex < songsList.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  }, [progress, currentIndex, playbackState]);

  return (
    <LinearGradient colors={['#a34c0d', '#592804', '#241001', '#000000']} style={{ flex: 1 }}>
      <ScrollView className="w-full h-full" showsHorizontalScrollIndicator={false}>
        <View className="w-full flex justify-center h-full px-4 my-6 mt-15">
          <View className="flex-row items-center">
            <Text className="flex-1 text-white font-bold text-2xl">Ajay Kumar Jaiswal</Text>

            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>

            <View className="w-5" />

            <TouchableOpacity>
              <AntDesign name="clockcircleo" size={24} color="white" />
            </TouchableOpacity>

            <View className="w-5" />

            <TouchableOpacity>
              <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View>
            <ButtonBelowGreetings />
          </View>

          <View className="flex-col justify-between mt-6">
            <View>
              <PlayList />
            </View>

            <View className="flex-1">
              <RowList title="RowList" />
            </View>
            <View className="flex-1">
              <ShowList title="ShowList" />
            </View>

            {/* Recent Played Section */}
            <View>
              <View className="flex-1 justify-between mt-6">
                <Text className="text-white text-2xl font-semibold mb-5 ml-4">Recent Played</Text>

                {/* Display the details of the current song */}

                <Image
                  source={{ uri: songsList[currentIndex].artwork }}
                  style={{
                    width: '90%',
                    height: '100%',
                    alignSelf: 'center',
                    marginTop: 20,
                    borderRadius: 5,
                  }}
                />
                <View className="mb-5">
                <Text className="text-white text-lg font-semibold ml-5 mt-5 mb-5">
                  {songsList[currentIndex].title}
                </Text>
                <Text className="text-white text-lg font-semibold ml-5">
                  Now Playing: {songsList[currentIndex]?.title || "No Song Playing"}
                </Text>
                </View>
                <View>
                  <FloatingMusicPlayer
                    songsList={songsList}
                    currentIndex={currentIndex}
                    playbackState={playbackState}
                    onPressPlayPause={handlePlayPause}
                    onPressVisible={() => setIsVisible(true)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      <SongPlayer
        isVisible={isVisible}
        songsList={songsList}
        currentIndex={currentIndex}
        playbackState={playbackState}
        progress={progress}
        onChange={(index) => setCurrentIndex(index)}
        onClose={() => setIsVisible(false)}
      />
      <View>
        {/* Image of the current song */}
        <Image
          source={{ uri: songsList[currentIndex].artwork }}
          style={{
            width: '90%',
            height: '100%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        {/* Floating Music Player placed below the image */}
        <View style={{ marginTop: 20 }}>
          <FloatingMusicPlayer
            songsList={songsList}
            currentIndex={currentIndex}
            playbackState={playbackState}
            onPressPlayPause={handlePlayPause}
            onPressVisible={() => setIsVisible(true)}
          />
        </View>
      </View>

    </LinearGradient>
  );

};

export default HomeScreen;
