import { View, Text,  ImageBackground, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import image from '../Assest/bannerBG.png'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native'
export default function ForgotPass({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.mainA}>
                    <Text style={styles.text}>Forgot Password?</Text>
                    <Text style={styles.textA}>Enter your email address and </Text>
                    <Text style={styles.textA}> we'll send an OTP for reset password</Text>

                    <TextInput
                        style={[styles.input, styles.textinputa]}
                        placeholder="Email ID"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.divsecond}>

                    <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('OtpVeri')}}>
                        <LinearGradient
                            colors={['#E37BD6', '#D11B70']}
                            start={{ x: 0, y: 0}}
                            end={{ x: 0, y: 0 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.loginText}>Send OTP</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
    },
    text: {
        color: 'white',
        fontSize: 30,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    textA: {
        color: "rgba(255, 255, 255, 0.8)",
        // marginHorizontal:78,
        fontSize: 16
    },
    mainA: {
        flex: 3,
        alignItems: "center",
        marginTop: 40
    },
    divsecond: {
        flex: 1,
        alignItems: "center"
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

    textinputa: {
        marginTop: 50
    },
    loginButton: {

        width: '90%',
        height: 55,
        // borderWidth: 1,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 10,
    
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