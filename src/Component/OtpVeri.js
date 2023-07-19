// import React, { useState, useRef } from 'react';
// import { View, TextInput, StyleSheet, Button, Alert, SafeAreaView, StatusBar, ImageBackground, Text, TouchableOpacity } from 'react-native';
// import image from '../Assest/bannerBG.png'
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient'
// export default function OtpVeri() {
//     const [otp, setOTP] = useState(['', '', '', '', '', '']);
//     const inputRefs = useRef([]);

//     const handleOTPChange = (text, index) => {
//         const newOTP = [...otp];
//         newOTP[index] = text;
//         setOTP(newOTP);

//         if (text !== '' && index < otp.length - 1) {
//             inputRefs.current[index + 1].focus();
//         }
//     };

//     const handleVerifyOTP = () => {
//         const enteredOTP = otp.join('');

//         if (enteredOTP.length !== 6) {
//             Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP.');
//             return;
//         }

//         // Perform OTP verification logic here
//         // You can replace the alert with your own logic, e.g., making an API call to verify the OTP

//         Alert.alert('Success', 'OTP verified successfully!');
//     };

//     const handleResendOTP = () => {
//         setOTP(['', '', '', '', '', '']);
//         inputRefs.current[0].focus();
//     };

//     return (

//         <SafeAreaView style={styles.container}>
//             <StatusBar backgroundColor="transparent" translucent={true} />
//             <ImageBackground source={image} resizeMode="cover" style={styles.image}>

//                 <View style={styles.mainA}>
//                     <Text style={styles.text}>Enter OTP</Text>

//                     <View style={[styles.otpContainer, styles.mainB]}>

//                         {otp.map((digit, index) => (
//                             <TextInput
//                                 key={index}
//                                 style={styles.input}
//                                 onChangeText={(text) => handleOTPChange(text, index)}
//                                 value={digit}
//                                 placeholder="-"
//                                 keyboardType="numeric"
//                                 maxLength={1}
//                                 ref={(ref) => (inputRefs.current[index] = ref)}
//                             />
//                         ))}

//                     </View>
//                     <TouchableOpacity style={styles.forgotPasswordContainer} >
//                     <Text style={styles.forgotPasswordText}>Resend OTP?</Text>
//                 </TouchableOpacity>

//                 </View>

              


//                 <View style={styles.divsecond}>

//                     <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('OtpVeri') }}>
//                         <LinearGradient
//                             colors={['#E37BD6', '#D11B70']}
//                             start={{ x: 0, y: 0 }}
//                             end={{ x: 0, y: 0 }}
//                             style={styles.gradient}
//                         >
//                             <Text style={styles.loginText}>Submit </Text>
//                         </LinearGradient>
//                     </TouchableOpacity>
//                 </View>


//             </ImageBackground>


//         </SafeAreaView >

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     otpContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 16,
//     },
//     mainA: {
//         flex: 3,
//         textAlign: "center",
//         marginTop: 70
//     },
//     mainB: {
//         flex: 1,
//         textAlign: "center",
//         marginTop: 30
//     },
//     input: {
//         width: 55,
//         height: 55,
//         borderColor: 'gray',
//         borderRadius: 7,
//         marginHorizontal: 4,
//         textAlign: 'center',
//         backgroundColor: "white"
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//         width: "100%",
//     },
//     divsecond: {
//         flex: 1,
//         alignItems: "center"
//     },
//     text: {
//         color: 'white',
//         fontSize: 30,
//         lineHeight: 84,
//         fontWeight: 'bold',
//         textAlign: 'center',

//     },
//     forgotPasswordContainer: {
//         flex: 1,
//         alignItems: "center",
//         alignSelf: "flex-end",
//         paddingRight: 20,
//         marginTop: -220

//     }, forgotPasswordText: {
//         color: 'white',
//         fontSize: 16,

//     },

//     loginButton: {

//         width: '90%',
//         height: 55,
//         // borderWidth: 1,
//         borderRadius: 30,
//         overflow: 'hidden',
//         marginTop: 10,

//     },

//     gradient: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     loginText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 18
//     },
// });
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, SafeAreaView, StatusBar, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import image from '../Assest/bannerBG.png'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function OtpVeri() {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleOTPChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    if (text !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');

    if (enteredOTP.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP.');
      return;
    }

    // Perform OTP verification logic here
    // You can replace the alert with your own logic, e.g., making an API call to verify the OTP

    Alert.alert('Success', 'OTP verified successfully!');
  };

  const handleResendOTP = () => {
    setOTP(['', '', '', '', '', '']);
    inputRefs.current[0].focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.mainA}>
            <Text style={styles.text}>Enter OTP</Text>
            <View style={[styles.otpContainer, styles.mainB]}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  onChangeText={(text) => handleOTPChange(text, index)}
                  value={digit}
                  placeholder="-"
                  keyboardType="numeric"
                  maxLength={1}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={handleResendOTP}>
              <Text style={styles.forgotPasswordText}>Resend OTP?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divsecond}>
            <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOTP}>
              <LinearGradient
                colors={['#E37BD6', '#D11B70']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradient}
              >
                <Text style={styles.loginText}>Submit OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:20
  },
  scrollViewContent: {
    flex:1},
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  mainA: {
    flex: 3,
    textAlign: 'center',
    marginTop: 70,
    paddingHorizontal:20
  },
  mainB: {
    flex: 1,
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal:20

  },
  input: {
    width: 55,
    height: 55,
    borderColor: 'gray',
    borderRadius: 7,
    marginHorizontal: 4,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  divsecond: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingRight: 20,
    marginTop: -220,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    width: '90%',
    height: 55,
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
    fontSize: 18,
  },
});
