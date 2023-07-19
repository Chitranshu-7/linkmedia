import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import logo2 from '../Assest/splash2.png'

import { useNavigation } from '@react-navigation/native';
export default function Splash() {

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // navigation.navigate('Login');
    //     }, 2000);
    

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <View style={styles.main}>
            <ImageBackground source={logo2} resizeMode='contain' style={styles.image}>
            </ImageBackground>
            <View style={styles.textview}>

                {/* <Text style={styles.TextHead} >TerraGrok </Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white"
    },
    image: {
        flex: 1
    },
    textview: {
        alignItems: "center",
        marginBottom: 18

    },
    TextHead: {
        fontWeight: "400",
        color: "#332F2F",
        fontSize: 16
    }

})