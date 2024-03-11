import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ImageBackground, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, TextInput } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';

//start of header component
export const Header = () => {

    const navigation = useNavigation();

    const [showSignInSuccess, setShowSignInSuccess] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSignInSuccess(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);
    return (

        <View style={{ zIndex: 1, }}>
            {showSignInSuccess && (
                <View style={{ position: 'absolute', zIndex: 1, backgroundColor: '#34B452', width: '100%', height: 'auto', justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 25, paddingBottom: 10, }}>
                    <Text style={{ color: 'white', fontSize: 15, }}>Sign in successful</Text>
                </View>
            )}

            <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 15, }}>
                <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                    <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5, }}>
                        <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 14, borderRadius: 5, alignItems: 'center', }}>
                            <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                    </View>

                    <View style={{ backgroundColor: '#1F2123', gap: 20, width: 'auto', alignItems: 'center', paddingRight: 20, display: 'flex', flexDirection: 'row', paddingBottom: 7, paddingTop: 6, justifyContent: 'flex-end', }}>
                        <Feather name="bookmark" style={{ color: '#ECEEF0', fontSize: 20, }} />
                        <Fontisto name="bell" style={{ color: '#ECEEF0', fontSize: 20 }} />
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 45, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, display: 'flex', flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Featured')}> 
                    <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: '#FCCF33', }}>Featured</Text>
                        <View style={{ backgroundColor: '#FCCF33', height: 4, width: '75%', borderRadius: 15, }}></View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Series')}>
                    <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Series</Text>
                        <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Films')}>
                    <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Films</Text>
                        <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Origin')}>
                    <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Origin</Text>
                        <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
                    <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Movies</Text>
                        <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                    </View>
                    </TouchableOpacity>
                </ScrollView >

            </View>
        </View>
    )
}
//end of header component


//Start of Filter Component
export const FilterName = [
    {
        name: 'Popular Today',
    },
    {
        name: 'Marvel',
    },
    {
        name: 'Fans Choice',
    },
    {
        name: 'Star Wars',
    },
    {
        name: 'Marvel',
    },
]
export function Filter({ name }) {
    return (

        <View style={{ width: 'auto', borderRadius: 7, height: 'auto', backgroundColor: 'transparent', borderWidth: 1, borderColor: '#B4B6BA', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, display: 'flex', flexDirection: 'row', }}>
            <Text style={{ color: '#BFC0C4', fontSize: 14, paddingTop: 4, paddingBottom: 4, }}>{name}</Text>
        </View>
    )
}
//End of Filter Component

//Start of Horizontal Movie Broswe Component

export const BrowseMovies = ({ movie, onPressImage }) => {
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', width: 250, height: 140, backgroundColor: 'transparent', borderRadius: 6, }} onPress={onPressImage}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={{ width: '100%', height: '100%', borderRadius: 6, resizeMode: 'cover', }}  />
            <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: 'auto', height: 'auto', position: 'absolute', borderRadius: 4, right: '2%', top: '4%', paddingHorizontal: 4, }}>
                <Text style={{ fontSize: 13, fontWeight: 500, }}>{movie.vote_average}</Text>
            </View>
            <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: 'auto', height: 'auto', position: 'absolute', borderRadius: 4, paddingHorizontal: 10, alignSelf: 'center', bottom: '1%', }}>
                <Text style={{ fontSize: 16, fontWeight: 400, color: 'black', }}>{movie.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
//End of Horizontal Movie Broswe Component


//Start of Vertical Movie Broswe Component

export const BrowseMoviesVertical = ({ movie, onPressImage }) => {
    return (
        // borderColor: '#5D5F5F',
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 200, backgroundColor: 'transparent', borderRadius: 6, borderWidth: 1, }} onPress={onPressImage}>
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={{ width: '100%', height: '100%', }} borderRadius={7} />
            <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: '12%', height: 'auto', position: 'absolute', borderRadius: 4, right: '4%', top: '4%', }}>
                <Text style={{ fontSize: 13, fontWeight: 500, }}>{movie.vote_average}</Text>
            </View>
            <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: '60%', height: 'auto', position: 'absolute', borderRadius: 4, bottom: '1%', alignSelf: 'center', }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: 'black', }}>{movie.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
//End of Vertical Movie Broswe Component

//start of bottom navigation

export const BottomNavigation = ({ iconColorHome, iconColorSearch, iconColorList, iconColorProfile, onHomePress, onSearchPress, onListPress, onProfilePress }) => {
    return (
        <View style={{ position: 'absolute', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2123', justifyContent: 'space-between', width: '100%', bottom: 0, paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', }}>
            <Pressable onPress={onHomePress}>
                <Feather name={'home'} style={{ color: iconColorHome, fontSize: 26 }} />
            </Pressable>

            <Pressable onPress={onSearchPress}>
                <Feather name={'search'} style={{ color: iconColorSearch, fontSize: 26 }} />
            </Pressable>

            <Pressable onPress={onListPress}>
                <Feather name={'folder'} style={{ color: iconColorList, fontSize: 26 }} />
            </Pressable>

            <Pressable onPress={onProfilePress}>
                <Feather name={'grid'} style={{ color: iconColorProfile, fontSize: 26 }} />
            </Pressable>
        </View>
         
    )

}

//end of bottom navigation

//Start of List Component
export const ListComponent = ({ movieLis, Genre, onPressImage }) => {
    return (
        <TouchableOpacity style={{ width: '100%', height: 110, display: 'flex', flexDirection: 'row', gap: -50, backgroundColor: 'transparent',}} onPress={onPressImage}>
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${movieLis.poster_path}` }} style={{ width: '75%', height: '100%', }}/>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', width: '40%', }}>
                <Text style={{ color: '#F0F1F5', fontSize: 13,}}>{movieLis.title}</Text>
                <Text style={{ color: '#AAABAF', top: '3%', }}>{movieLis.release_date}</Text>
                
                <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
                {Genre.map((genre,index) =>{
                    
                    if (movieLis.genre_ids.includes(genre.id)){
                        return(
                            <Text key={index} style={{ color: '#97989C', top: '2%', fontSize: 12, display: 'flex', flexDirection: 'row',}}>{`${genre.name}, `}</Text>
                        )
                    }
                    
                } )}
                </View>
                
            </View>

        </TouchableOpacity>
    )
}
//End of List Component
 

//start of BrowseMoviesAction component

export const BrowseMoviesAction = ({ movie, onPressImage }) => {
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', width: 100, height: 160, backgroundColor: 'transparent',  }} onPress={onPressImage}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}  />
        </TouchableOpacity>
    )
}

//end of BrowseMoviesAction component

//start of EditProfile Component

export const TextInputComp = ({placeholder, iconName, }) => {
    <TextInput 
    placeholder={placeholder} placeholderTextColor={"#555759"}
    theme={{
        colors: {
            primary: '#F9CC30',
        }
    }}
    underlineColor="#555759"
    right={<TextInput.Icon icon={iconName} color={'#F9CC30'}/>}
    textColor="#white"
    />
}

//end of EditProfile Component