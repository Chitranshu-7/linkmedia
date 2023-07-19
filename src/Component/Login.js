import { ImageBackground, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import image from '../Assest/bannerBG.png'
import logot from '../Assest/logot.png'
import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {

  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="transparent" translucent={true} />
  
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         


        < View style={styles.imagein}>
          <Image
            style={styles.imagepro}
            source={require('../Assest/logot.png')}
            />
          <Text style={styles.text}>Welcome Back</Text>
          <Text style={styles.textA}>login to continue </Text>
        </View>
        <View style={styles.divsecond}>

          <TextInput
            style={styles.input}
            placeholder="Email ID"
            keyboardType="email-address"
            />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            />
          <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => { navigation.navigate('ForgotPass'); }} >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.loginButton}>
            <LinearGradient
             colors={['#E37BD6', '#D11B70']}
             start={{ x: 0, y: 0 }}
             end={{ x: 0, y: 0 }}
             style={styles.gradient}
             >
              <Text style={styles.loginText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={()=>{ navigation.navigate('Registration')}}>
              <Text style={styles.signupLink}>Signup Now</Text>
            </TouchableOpacity>
          </View>



        </View>

      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%"
  },
  
  divsecond: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  textA: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: -15
  }
  ,
  imagein: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imagepro: {
    width: 130,
    height: 130,
    resizeMode: "stretch"
  }, 
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    width: '90%',
    height: 55,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    fontSize: 15,
    paddingHorizontal: 17,
  },

  loginButton: {
    width: '90%',
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 10,

  },
  forgotPasswordContainer: {

    alignSelf: "flex-end",
    paddingRight: 30,
    marginTop: 1,
    marginBottom: 20

  }, forgotPasswordText: {
    color: 'white',
    fontSize: 16,

  },

  signupContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',

    // color:'white'
  },
  signupText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    color: 'white',
  },
  signupLink: {
    color: '#FF6B77',
    fontSize: 16,

    fontWeight: 'bold',
    marginLeft: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },




})


