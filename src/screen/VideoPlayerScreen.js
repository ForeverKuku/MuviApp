import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoPlayerScreen = ({ navigation,route }) => {
  const { youtubeVideoId } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
         <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#FFF" />
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <YoutubePlayer
          height={300}
          play={true}
          videoId={youtubeVideoId}
          webViewStyle={{opacity: 0.99}} 
          useWebKit={true} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    padding: 10, 
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10, 
  },
});

export default VideoPlayerScreen;
