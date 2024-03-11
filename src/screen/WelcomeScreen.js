import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

const WelcomeScreen = ({ navigation }) => {
  const handleSignInScreen = () => {
    navigation.navigate('SignInScreen'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.mButtonContainer}>
        <TouchableOpacity style={styles.mButton}>
          <Text style={styles.mButtonText}>M</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Muvi</Text>
      </View>
      </View>
      <View style={styles.fakeRightButton}></View>
      <Image
        source={require('../image/loga-removebg.png')}
        style={styles.logo}
      />

      <Text style={styles.welcomeText}>Welcome to Muvi</Text>
      <Text style={styles.subtitle}>
        Free movies streaming all your needs; everytime and everywhere.
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.watchMoviesButton]}
        onPress={handleSignInScreen}
      >
        <Text style={styles.buttonText}>Watch Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignInScreen}
      >
        <Text style={styles.buttonText1}>Sign In</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#000000',
      },
      headerRow: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
        alignItems: 'center',
        justifyContent:'center',
        width: '100%', 
        marginBottom: 20, 
      },
      backButton: {
        marginRight: 20, 
        position:'absolute',
        left:20
      },
      mButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButtonText: {
        fontSize: 24, 
        color:'white',
      },
      mButton: {
        backgroundColor: 'gold', 
        padding: 3, 
        marginRight: 10,  
      },
      mButtonText: {
        fontSize: 20, 
        margin:5,
      },
      titleText: {
        fontSize: 24, 
        color:'white',
        fontWeight:'bold',
      },
      logo: {
        width: 200, 
        height: 200, 
        marginBottom: 20,
        justifyContent:'center',
        resizeMode:'cover,'
      },
      welcomeText:{
        color:'white',
        fontSize:20,
        marginBottom:10,
      },
      subtitle: {
        textAlign: 'center', 
        marginBottom: 70,
        color:'white' 
      },
     
      button: {
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius: 8,
        marginBottom: 10, 
        width: '100%', 
      },
      watchMoviesButton: {
        backgroundColor: 'gold', 
        marginBottom:10,
      },
      buttonText: {
        textAlign: 'center',
        color:'black', 
        fontSize: 18,
        fontWeight:'bold',
      },
      buttonText1: {
        textAlign: 'center',
        color:'white', 
        fontSize: 18,
        fontWeight:'bold',
      },
});

export default WelcomeScreen;
