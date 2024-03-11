import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Button,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { firebaseAuth } from "../../FirebaseConfig";



const ProfileScreen = ({ navigation }) => {
  const height = Dimensions.get("screen")
const width = Dimensions.get("screen")


  const handleLogout = async () => {
    await firebaseAuth.signOut();
    navigation.navigate('SignInScreen')
   
  };
  return (
    
    <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={() => navigation.CustomDrawerContent()} style={{ margin: 10 }}>
      <Icon name="bars" size={24} color="white" />
    </TouchableOpacity>
    
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../image/female.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Hi, Kitani Sarasvati</Text>
        <Text style={styles.email}>48 times watched movies on Muvi</Text>
        <Button title="Edit Profile" color="gold" onPress={() => navigation.navigate('EditProfile')} />
          
       

        <View style={styles.optionContainer}>
          <OptionItem title="Inbox" iconName="inbox" onPress={() => {}} />
          <OptionItem title="Account Settings" iconName="cog" onPress={() => {}} />
          <OptionItem title="Language" iconName="language" onPress={() => {}} />
          <OptionItem title="Help" iconName="question-circle" onPress={() => {}} />
          <OptionItem title="FAQ" iconName="info-circle" onPress={() => {}} />
        </View>
        <TouchableOpacity style={styles.signOutButton} onPress={handleLogout}>
          <Text style={styles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const OptionItem = ({ title, iconName, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <Icon name={iconName} size={20} color="#000" style={styles.optionIcon} />
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 46,
    backgroundColor: 'black',
  },
  textMore: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:16,
    color:'white',
  },
  signOutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: '80%', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, 
    marginLeft:24,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    marginLeft:58,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white',
    marginLeft:24,
  },
  email: {
    fontSize: 16,
    marginBottom: 16,
    color:'white',
    marginLeft:24,
  },
  optionContainer: {
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionIcon: {
    marginRight: 8,
    color:'white',
  },
  optionText: {
    fontSize: 16,
    color:'white',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 8,
  },
});

export default ProfileScreen;
