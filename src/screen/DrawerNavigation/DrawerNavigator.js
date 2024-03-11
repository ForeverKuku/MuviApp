import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileScreen from '../ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
        initialRouteName="Profile"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
