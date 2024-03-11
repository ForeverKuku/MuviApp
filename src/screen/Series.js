import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Series = ({navigation}) => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const [error, setError] = useState(null);
   

  useEffect(() => {
    fetchFeaturedMovie();
    fetchPopularMovies();
    fetchContinueWatching();
  }, []);

  const fetchFeaturedMovie = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    fetch('https://api.themoviedb.org/3/search/movie?query=Iron%20Man&include_adult=false&language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setFeaturedMovie(data.results[0]);
        }
      })
      .catch(err => setError(err.toString()));
  };

  const fetchPopularMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options) 
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setPopularMovies(data.results);
        }
      })
      .catch(err => setError(err.toString()));
  };

  const fetchContinueWatching = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    fetch('https://api.themoviedb.org/3/search/movie?query=Strong%20girl%20Na%20soon&include_adult=false&language=en-US&page=1', options) 
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setContinueWatching(data.results);
        }
      })
      .catch(err => setError(err.toString()));
  };

  if (error) {
    return <View style={styles.container}><Text style={styles.errorText}>Error fetching data: {error}</Text></View>;
  }

return (
  <SafeAreaView style={styles.safeArea}>
     <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#FFF" />
      </TouchableOpacity>
  <View style={styles.flexContainer}>
 <ScrollView style={styles.container}>

   {/* Featured Movie */}
   {featuredMovie && (
     <View style={styles.featuredMovieContainer}>
       <Image
         source={{ uri: `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}` }}
         style={styles.featuredMovieImage}
       />
       <TouchableOpacity style={styles.playButton} onPress={() => {/* Logic to play movie */}}>
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

   {/* Continue Watching Section */}
   <View>
     <Text style={styles.sectionTitle}>Continue Watching</Text>
     <ScrollView horizontal={true} style={styles.horizontalScrollView}>
       {continueWatching.map(movie => (
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
</View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
safeArea: {
 flex: 1,
 backgroundColor: 'black',
},
flexContainer: {
 flex: 1, 
},
container: {
 flex: 1,
},
movieContainer: {
 marginBottom: 20,
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
bottomNavBar: {
 flexDirection: 'row',
 justifyContent: 'space-around',
 alignItems: 'center',
 paddingVertical: 10,
 backgroundColor: 'rgba(0, 0, 0, 0.6)',
},
featuredMovieImage: {
 width: '100%', 
 height: 300, 
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
horizontalScrollView: {
 paddingLeft: 20,
 
},

});

export default Series;
