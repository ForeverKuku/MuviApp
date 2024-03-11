import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen';
import GetStarted from './src/screen/GetStarted';
import WelcomeScreen from './src/screen/WelcomeScreen';
import SignInScreen from './src/screen/SignInScreen';
import CreateAccount from './src/screen/CreateAccount';
import ActionScreen from './src/screen/ActionScreen';
import { ActionTV } from './src/screen/ActionTV';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import SearchScreen from './src/screen/SearchScreen';
import { List } from './src/screen/List';
import ProfileScreen from './src/screen/ProfileScreen';
import Feather from "react-native-vector-icons/Feather";
import Featured from './src/screen/Featured';
import Films from './src/screen/Films';
import Series from './src/screen/Series';
import Origin from './src/screen/Origin';
import Movies from './src/screen/Movies';
import VideoPlayerScreen from './src/screen/VideoPlayerScreen';
import { ThemeProviderIntoDarkModa } from '../MuviMovieApp/src/screen/ThemeContext';
import { EditProfile } from './src/screen/EditProfile';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProviderIntoDarkModa>
    <GestureHandlerRootView style={{ flex: 1 }}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}} />
    
  


        <Stack.Screen name="HomeScreen" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="SearchScreen" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="ProfileScreen" component={TabNavigator} options={{headerShown:false}} />

        <Stack.Screen name="Featured" component={Featured} options={{headerShown:false}} />
        <Stack.Screen name="Films" component={Films} options={{headerShown:false}} />
        <Stack.Screen name="Series" component={Series} options={{headerShown:false}} />
        <Stack.Screen name="Origin" component={Origin} options={{headerShown:false}} />
        <Stack.Screen name="Movies" component={Movies} options={{headerShown:false}} />
        <Stack.Screen name="Action" component={ActionScreen} options={{headerShown:false}} />
        <Stack.Screen name="ActionTV" component={ActionTV} options={{headerShown:false}} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} options={{headerShown:false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView> 
    </ThemeProviderIntoDarkModa>
  );
};


export default App;


export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'SearchScreen') {
            iconName = 'search';
          } else if (route.name === 'List') {
            iconName = 'folder';
          }else if (route.name === 'ProfileScreen') {
            iconName = 'grid';
          }

          return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },

        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },
        
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="List" component={List} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

