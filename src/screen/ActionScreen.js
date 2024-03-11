import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import  { useEffect, useState, useCallback } from "react";
import { IconButton } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
// import YoutubePlayer from "react-native-youtube-iframe"
import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray,  Header, BrowseMoviesAction
} from "./Components";
import YoutubeIframe from "react-native-youtube-iframe";
import HomeScreen from './HomeScreen';




const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

const ActionScreen = ({ navigation, route }) =>{
  const { movieid, movieTitle, movieOverview } = route.params;
  // const {  } = route.params;
  // const {  } = route.params;
  console.log("this is from action:", movieid);
  console.log("this is title from Home in action:", movieTitle);
  console.log("this is overview from Home in action:", movieOverview);



  const [movies, setMovies] = useState([]);
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
  };

  const fetchMovies = () => {

      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
          .then(response => response.json())
          .then(response => {
              setMovies(response.results)
          })
          .catch(err => console.error(err));

  };
  useEffect(() => {
      fetchMovies()
  }, [])

  const [movies2, setMovies2] = useState([]);
  const fetchMovies2 = () => {

      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
          .then(response => response.json())
          .then(response => {
              setMovies2(response.results)
          })
          .catch(err => console.error(err));

  };
  useEffect(() => {
      fetchMovies2()
  }, [])


  const [playing, setPlaying] = useState(false)
  const [trailer, SetTrailer] = useState([]);
  const fetchMovieTrailer = () => {

      fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, options)
          .then(response => response.json())
          .then(response => {
              SetTrailer(response.results)
          })
          .catch(err => console.error(err));
      console.log("this is trailer", trailer);
  };
  useEffect(() => {
      fetchMovieTrailer()
  }, [])

  const trailerKeys = trailer.length > 0 ? trailer.map(trailerkey => trailerkey.key) : [];
  console.log("Trailer keys:", trailerKeys);

  const handlePlaybtn = () => {
      setPlaying(!playing)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, }}>
          <StatusBar style="light" />
          <SafeAreaView style={{ backgroundColor: '#26282C', flex: 1, paddingTop: 40, }}>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingBottom: 10, }}>
                  <AntDesign name="arrowleft" size={25} color={'#E9D160'} onPress={() => navigation.goBack()}  />
                  <Text style={{ color: 'white', fontSize: 17, fontWeight: 700, }}>Action</Text>
              </View>

              <ScrollView style={{ flex: 1, flexGrow: 1, paddingBottom: 20, height: 'auto', backgroundColor: '#1A1C1E', }}>

                  <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#26282C', width: '100%', paddingHorizontal: 20, paddingBottom: 10, }}>

                      <View style={{ height: 20, }}></View>

                      <View style={{ width: '100%', backgroundColor: '#26282C', height: 190,}}>
                          <YoutubeIframe   
                              height={'100%'}
                              width={'100%'}
                              play={playing} 
                              videoId={trailerKeys[0]}
                          />
                      </View>

                      <View style={{ height: 15, }}></View>
                      <View style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '85%', backgroundColor: 'transparent', }}>
                          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', }}>{movieTitle}</Text>
                          <Text style={{ color: '#A8AAAE', fontSize: 13, fontWeight: 200, }}>{movieOverview}</Text>
                      </View>

                      <View style={{ height: 20, }}></View>

                      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                          <Pressable onPress={handlePlaybtn} style={{ display: 'flex', flexDirection: 'row', gap: 3, backgroundColor: '#FDD130', alignItems: 'center', width: '48%', paddingVertical: 10, paddingLeft: 20, borderRadius: 5, }}>
                              <Feather name="play" size={15} color={'#1F2123'} />
                              <Text style={{ color: '#1F2123', }}>Play</Text>
                          </Pressable>

                          <Pressable style={{ display: 'flex', flexDirection: 'row', gap: 3, backgroundColor: 'transparent', alignItems: 'center', borderColor: '#5F6165', borderWidth: 1, width: '49%', paddingVertical: 10, paddingLeft: 20, borderRadius: 5, }}>
                              <Feather name="plus" size={15} color={'#FDD130'} />
                              <Text style={{ color: 'white', }}>My List</Text>
                          </Pressable>
                      </View>
                  </View>

                  <View style={{ display: 'flex', flexDirection: 'column', }}>
                      {/*start middle Section */}
                      <View style={{ backgroundColor: '#26282C', height: 'auto', width: '100%', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20, gap: 20, paddingBottom: -5 }}>

                          {/* Start of Horizontal Movie Broswe */}
                          <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, }}>
                              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, }}>U.S Action Movies</Text>
                              </View>


                              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                  {movies.map((movie, index) => (
                                      <View key={index}>
                                          <BrowseMoviesAction
                                              movie={movie}
                                          />
                                      </View>
                                  ))}
                              </ScrollView>
                          </View>

                          <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, marginTop: -22, }}>
                              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, }}>Muvi Original Action</Text>
                              </View>

                              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                  {movies2.map((movie, index) => (
                                      <BrowseMoviesAction key={index}
                                          movie={movie}
                                      />
                                  ))}
                              </ScrollView>
                          </View>
                          {/* End of Horizontal Movie Broswe */}
                      </View>
                      {/*end of middle Section */}
                  </View>
              </ScrollView>
          </SafeAreaView>
      </View>
      </GestureHandlerRootView>

  )
}

export default ActionScreen;
