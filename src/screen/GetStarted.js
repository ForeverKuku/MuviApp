import React from 'react';
import {  Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const GetStarted = ({ navigation }) => {
    const handleWelcomeScreen = () => {
      navigation.navigate('WelcomeScreen'); 
    };


  return (
    <ImageBackground
    source={require('../image/joker.jpeg')}
    style={styles.container}
  >
    
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text> 
      </TouchableOpacity>
    <Text style={styles.title}>Enjoy your favorite movie everywhere</Text>
    <Text style={styles.subtitle}>
      Browse through our collections and discover hundreds of movies and series that you’ll love!
    </Text>
    <TouchableOpacity style={styles.button} onPress={handleWelcomeScreen}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </ImageBackground>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        resizeMode:'cover',
      },
     
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', 
        textAlign: 'center',
        marginTop:180,
        textAlign:'left',
        
      },
      subtitle: {
        fontSize: 16,
        color: '#FFFFFF', 
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop:10,
        textAlign:'left',
        
      },
      button: {
        backgroundColor: 'gold', 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderRadius: 5, 
        alignSelf: 'stretch',
        marginTop:'auto',
      },
      buttonText: {
        fontSize: 20,
        color: '#000000', 
        textAlign: 'center', 
        fontWeight:'bold',
      },
      backButton: {
        postion:'absolute' ,
        alignSelf: 'flex-start',
        marginTop: 20, 
       
      },
      backButtonText: {
        fontSize: 24, 
        color: '#FFFFFF', 
      },
});

export default GetStarted;
