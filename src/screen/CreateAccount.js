import { StatusBar, View,Text,Dimensions,Pressable, SafeAreaView, StyleSheet,Image} from "react-native";
import React, { useState } from "react";
import { Icon } from 'react-native-paper';
import { TextInput } from "react-native-paper";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { firebaseAuth } from "../../FirebaseConfig";
import SignInScreen from "./SignInScreen";



const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

 const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  

  const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
  }
  const validateForm = () => {
      let valid = true

      if (email.trim() == '') {
          setEmailError('Email is required')
          valid = false
      } else if (!isValidEmail(email)) {
          setEmailError('Invalid email format')
          valid = false
      } else {
          setEmailError('')
      }

      if (password.trim() == '') {
          setPasswordError('Password is required')
          valid = false
      } else {
          setPasswordError('')
      }


      if (confirmPassword.trim() == '') {
          setConfirmPasswordError('Confirm Password is required');
          valid = false;
      } else if (password !== confirmPassword) {
          setConfirmPasswordError('Passwords do not match');
          valid = false;
      } else {
          setConfirmPasswordError('');
      }

      return valid
  }


  const handleSubmit = async () => {
      if (validateForm()) {
          try {
              const response = await createUserWithEmailAndPassword(firebaseAuth, email, password)
              console.log(response);
              console.log('Registered successfully');
              showMessage({
                  message: "Successfully Signed Up",
                  type: "success",
                  icon: "info",
                  hideStatusBar: true,
                  duration: 3000,
              });
              navigation.navigate('HomeScreen');
          } catch (error) {
              console.log(error);
              showMessage({
                  message: error.code,
                  type: "danger",
                  icon: "info",
                  duration: 3000,
              });
          } 
      }
  }


  return (
    <View style={styles.container}>
    <FlashMessage position="top" />
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="light" />
      <View style={styles.innerContainer}>
        <View style={styles.transparentView}></View>
        <View style={styles.arrowLeftContainer}>
          <AntDesign name="arrowleft" style={styles.arrowLeftIcon} onPress={() => navigation.goBack()} /> 
        </View>
        <View style={styles.transparentViewSmall}></View>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Account</Text>
            <Text style={styles.subHeaderText}>Enter Infomation below or login with social account to get started</Text>
          </View>
          <TextInput
        theme={{ colors: { primary: '#FCD130', text: 'white' } }}
        textColor="white"
        style={styles.textInput}
        mode="outlined"
        underlineColor="#37393D"
        placeholder="Email"
        placeholderTextColor={'#B8B7C0'}
        right={<TextInput.Icon icon={'email-outline'} color='#F6A035' />}
        autoCompleteType="email"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        theme={{ colors: { primary: '#FCD130' } }}
        textColor="white"
        style={styles.textInput}
        mode="outlined"
        underlineColor="#37393D"
        placeholder="Password"
        placeholderTextColor={'#B8B7C0'}
        right={<TextInput.Icon icon={'eye-off-outline'} color='#F6A035' />}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        error={passwordError}
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TextInput
        theme={{ colors: { primary: '#FCD130' } }}
        textColor="white"
        style={[styles.textInput, styles.confirmPasswordTextInput]}
        mode="outlined"
        underlineColor="#37393D"
        placeholder="Confirm Password"
        placeholderTextColor={'#B8B7C0'}
        right={<TextInput.Icon icon={'eye-off-outline'} color='#F6A035' />}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={passwordError}
      />
      {confirmPasswordError && <Text style={styles.errorText}>{confirmPasswordError}</Text>}

      <Text style={styles.infoTextRight}>Forgot Password?</Text>
      <Text style={styles.infoTextLeft}>or continue with:</Text>

      <View style={styles.socialMediaRow}>
        <Image source={require('../image/GoogleIcon2.jpg')} style={styles.socialIcon} />
        <View style={styles.facebookIconContainer}>
          <Fontisto name="facebook" style={styles.facebookIcon} />
        </View>
      </View>
      <View style={styles.emptyView}></View>
        </View>
      </View>
    </SafeAreaView>
    <Pressable onPress={handleSubmit} style={styles.pressable}>
      <Text style={styles.text}>Register</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  height: height,
  width: width,
  flex: 1,
  backgroundColor: '#26282C',
},
safeAreaView: {
  backgroundColor: '#26282C',
  height: height,
  width: width,
  flex: 1,
},
innerContainer: {
  backgroundColor: '#26282C',
  paddingHorizontal: 20,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
},
transparentView: {
  width: '100%',
  height: '6%',
  backgroundColor: 'transparent',
},
arrowLeftContainer: {
  backgroundColor: 'transparent',
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  paddingLeft: -5,
  justifyContent: 'flex-start',
  gap: 5,
},
arrowLeftIcon: {
  fontSize: 30,
  color: '#F3D235',
},
transparentViewSmall: {
  width: '100%',
  height: '4%',
  backgroundColor: 'transparent',
},
contentContainer: {
  width: '100%',
  height: 'auto',
  gap: 15,
},
headerContainer: {
  backgroundColor: 'transparent',
  width: '80%',
},
headerText: {
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
},
subHeaderText: {
  color: 'white',
  fontSize: 14,
  fontWeight: '300',
},
textInput: {
  backgroundColor: 'transparent',
  width: '100%',
  textAlign: 'left',
  borderBottomWidth: 1,
  borderBottomColor: '#37393D',
},
confirmPasswordTextInput: {
  fontSize: 15, 
},
errorText: {
  color: 'red',
},
infoTextRight: {
  color: '#B8B7C0',
  textAlign: 'right',
},
infoTextLeft: {
  color: '#B8B7C0',
  textAlign: 'left',
},
socialMediaRow: {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: 10,
},
socialIcon: {
  width: '13%',
  height: 40, 
},
facebookIconContainer: {
  backgroundColor: '#2E3033',
  color: '#405489',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 15,
  paddingVertical: 3,
},
facebookIcon: {
  backgroundColor: '#2E3033',
  color: '#405489',
  alignItems: 'center',
  fontSize: 25,
},
emptyView: {
  width: '100%',
  backgroundColor: 'transparent',
},
pressable: {
  backgroundColor: '#F8B700',
  width: '90%',
  paddingVertical: 10,
  alignItems: 'center',
  borderRadius: 5,
  justifyContent: 'center',
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
},
text: {
  fontSize: 15,
},
});

export default CreateAccount;