import { StatusBar } from 'react-native';
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text,StyleSheet,Dimensions,SafeAreaView,Image, Pressable, ImageBackground, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from "react-native-vector-icons/Fontisto";
import { firebaseAuth } from "../../FirebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage,  { showMessage, hideMessage } from "react-native-flash-message";
import { ThemeContext } from '../screen/ThemeContext';
import { ThemeProvider } from '../screen/ThemeContext';
import { ChangeIntoDarkModa } from '../screen/ThemeContext';


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {datas,dark,changeIntoDark} =  useContext(ChangeIntoDarkModa)


   
  
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateForm = () => {
      let valid = true;
  
      if (!email.trim()) {
        setEmailError('Email is required');
        valid = false;
      } else if (!isValidEmail(email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
  
      if (!password.trim()) {
        setPasswordError('Password is required');
        valid = false;
      } else {
        setPasswordError('');
      }
  return valid
  }
  
  const data = {
      email: email,
      password: password
    };
  
    const handleSubmit = async () => {
      if (validateForm()) {
        try {
  
  
          const response = await signInWithEmailAndPassword(firebaseAuth,email, password);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            }),
          );
  
          await AsyncStorage.setItem('user-data', JSON.stringify({ email, password }));
          console.log(response);
          console.log('you are now signed in');
          showMessage({
              message: "Account created successfully",
              type: "success",
              duration: 3000,
          });
  
         }   catch (error) {
              console.error("Firebase error:", error.message);
              showMessage({
                message: error.message,
                type: "danger",
                duration: 3000,
              });   
          }
      }
      };
    
            return (
   <View style={[styles.container, { backgroundColor: dark ? 'black' : 'white' }]}>
  <FlashMessage position="top" />
  <Button title="Change into Dark" onPress={changeIntoDark} />
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.innerContainer}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <View style={styles.signInRow}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.footerTextContainer}>
          <Text style={styles.registerText}>
            Don't Have an account? <Text style={styles.registerLink} onPress={() => navigation.navigate('CreateAccount')}>Register</Text>
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.continueText}>or continue with:</Text>
      <View style={styles.socialMediaContainer}>
        <Image source={require('../image/GoogleIcon2.jpg')} style={styles.googleIcon} />
        <View style={styles.facebookIconContainer}>
          <Fontisto name="facebook" style={styles.facebookIcon} />
        </View>
      </View>
      <View style={styles.loginButtonContainer}>
      <Pressable onPress={handleSubmit} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign in</Text>
      </Pressable>
      </View>
    </View>
  </SafeAreaView>
</View>
            
  );
  }
                    
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  safeArea: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  signInRow: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20, 
  },
  registerText: {
    textAlign: 'center',
  },
  registerLink: {
    color: '#0066ff',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  continueText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  facebookIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 25,
  },
  facebookIcon: {
    color: '#ffffff',
    fontSize: 24,
  },
  loginButtonContainer: {
    alignSelf: 'stretch',
    marginTop: 100, 
  },
  loginButton: {
    padding: 15,
    backgroundColor: 'gold',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 19,
  },
    });
  
export default SignInScreen;