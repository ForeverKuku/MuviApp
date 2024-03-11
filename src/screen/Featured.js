import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { Feather } from "react-native-vector-icons";

const Featured = ({ navigation, route }) => {
  const { movieid, movieName, movieOverview } = route.params || {};

  useEffect(() => {
    if (movieid) {
      fetchMovieTrailer(movieid);
    }
  }, [movieid]);

  const [trailer, setTrailer] = useState([]);
  const [playing, setPlaying] = useState(false);

  const fetchMovieTrailer = (movieid) => {
    const url = `https://api.themoviedb.org/3/tv/${movieid}/videos?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNjYTFjMmMwZWJjOTIyYzg3NDIyMDQ2YzQxZjgwMyIsInN1YiI6IjY1ZDg2ZTUwYjIzNGI5MDE4NmM3OGY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTcwgnALkWD0bLd6-G4K_icvCc067MyQB_xT5ldSUck'
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setTrailer(data.results);
      })
      .catch((error) => {
        console.error('Error fetching movie trailer:', error);
      });
  };

  // Use the first trailer's key if available; otherwise, use a default video ID
  const trailerKey = trailer.length > 0 ? trailer[0]?.key : "https://youtu.be/F020aNi0wS0?si=rwKYkD4YVr_mLF97";

  const handlePlayButton = () => {
    setPlaying(!playing);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#26282C" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 20 }}>
          <Pressable onPress={() => navigation.navigate("HomeScreen")}>
            <Feather name="arrow-left" size={25} color="#E9D160" />
          </Pressable>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
          Action
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ height: 190, backgroundColor: "#26282C" }}>
            <YoutubeIframe
              height={"100%"}
              width={"100%"}
              play={playing}
              videoId={trailerKey}
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {movieName}
            </Text>
            <Text style={{ color: "#A8AAAE", fontSize: 13, fontWeight: "200" }}>
              {movieOverview}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Pressable
             onPress={handlePlayButton} 
             style={{
               flexDirection: "row",
    backgroundColor: "#FDD130",
    alignItems: "center",
    width: "48%",
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 5,
    marginRight: "2%",
  }}
>
  <Feather name="play" size={15} color={"#1F2123"} />
  <Text style={{ color: "#1F2123", marginLeft: 5 }}>Play</Text>
</Pressable>
              <Pressable
                style={{
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                  borderColor: "#5F6165",
                  borderWidth: 1,
                  width: "48%",
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 5,
                }}
              >
                <Feather name="plus" size={15} color={"#FDD130"} />
                <Text style={{ color: "white", marginLeft: 5 }}>My List</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Featured;
