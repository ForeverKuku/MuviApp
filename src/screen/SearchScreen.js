import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck',
          },
        };
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type title, categories, years, etc."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <Text style={styles.popularSearchTitle}>Popular Movies</Text>
          <FlatList
            data={popularMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.popularSearchItem}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.posterImage}
                />
                <View>
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieYear}>{new Date(item.release_date).getFullYear()}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  padding: 16,
  paddingBottom: 56 + 16,
  backgroundColor: 'black', 
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color:'white',
    fontWeight:'bold'
  },
  popularSearchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white',
  },
  popularSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  posterImage: {
    width: 80,
    height: 100,
    marginRight: 12,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
  },
  movieYear: {
    fontSize: 14,
    color:'white',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56, 
    position: 'absolute', 
    left: 0,
    right: 0,
    bottom: 0, 
    backgroundColor: 'black', 
  },
  searchText:{
color:'white'
  },
});

export default SearchScreen;