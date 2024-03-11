import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YoutubePlayer from "react-native-youtube-iframe";


const Origin = ({ navigation }) => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState('');
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [featured, popular] = await Promise.all([fetchFeaturedMovie(), fetchPopularMovies()]);
        setFeaturedMovie(featured);
        setPopularMovies(popular);
      } catch (err) {
        setError(err.toString());
      }
    };

    fetchAllData();
  }, []);

  const fetchFeaturedMovie = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/search/movie?query=Iron%20Man&include_adult=false&language=en-US&page=1', options);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0];
      }
    } catch (err) {
      throw new Error(err.toString());
    }
  };

  const fetchPopularMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const data = await response.json();
      return data.results || [];
    } catch (err) {
      throw new Error(err.toString());
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error fetching data: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
       <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#FFF" />
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <YoutubePlayer
              height={300}
              play={true}
              videoId={selectedVideoId}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



      <ScrollView style={styles.container}>
        {/* Featured Movie */}
        {featuredMovie && (
          <View style={styles.featuredMovieContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}` }}
              style={styles.featuredMovieImage}
            />
           <TouchableOpacity
      style={styles.playButton}
      onPress={() => {
        // Example YouTube video ID for Iron Man's trailer
        const youtubeVideoId = '8ugaeA-nMTc';
        navigation.navigate('VideoPlayerScreen', { youtubeVideoId });
      }}
    >

              <Icon name="play" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.movieTitle}>{featuredMovie.title}</Text>
          </View>
        )}

        {/* Popular Movies Section */}
        <View>
          <Text style={styles.sectionTitle}>Popular Movies</Text>
          <ScrollView horizontal={true} style={styles.horizontalScrollView}>
            {popularMovies.map(movie => (
              <View key={movie.id} style={styles.movieContainer}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  style={styles.movieImage}
                />
                <Text style={styles.movieTitle}>{movie.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1, 
  },
  container: {
    flex: 1,
  },
  featuredMovieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  movieContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieTitle: {
    color: 'white',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 50,
  },
  featuredMovieImage: {
    width: '100%',
    height: 300,
  },
  horizontalScrollView: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Origin;
