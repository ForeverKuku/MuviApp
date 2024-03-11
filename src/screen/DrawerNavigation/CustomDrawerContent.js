import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>HomeScreen</Text>
      <Text>Search</Text>
      <Text>SignOut</Text>
      <Text>Dark Mode</Text>
      
        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Inbox')}>
          <Icon name="inbox" size={20} color="#000" />
          <Text style={styles.optionText}>Inbox</Text>
        </TouchableOpacity>
        
      

     
    </ScrollView>
  );
};
