import { View, Text, StyleSheet, ScrollView, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import image from '../Assest/bannerBG.png'
import LinearGradient from 'react-native-linear-gradient'
import { Picker } from '@react-native-picker/picker';
export default function Registration({navigation}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [religion, setReligion] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const religiousOptions = ['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Judaism'];
    const handleTermsToggle = () => {
        setAcceptedTerms(!acceptedTerms);
    };
    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ScrollView>

                <View style={styles.container}>
                    <View >
                        <Text style={styles.text}>Business Registration</Text>
                    </View>


                    <View style={styles.nameContainer}>
                        <TextInput
                            style={[styles.inputsmall, styles.firstNameInput]}
                            onChangeText={setFirstName}
                            value={firstName}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={[styles.inputsmall, styles.lastNameInput]}
                            onChangeText={setLastName}
                            value={lastName}
                            placeholder="Last Name"
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                    />
                      <View style={styles.religionContainer}>
                        <Picker
                            style={styles.religionPicker}
                            selectedValue={religion}
                            onValueChange={(value) => setReligion(value)}
                        >
                            <Picker.Item label="Select Religion" value="" />
                            {religiousOptions.map((option, index) => (
                                <Picker.Item key={index} label={option} value={option} />
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.nameContainer}>
                        <TextInput
                            style={[styles.inputsmall, styles.firstNameInput]}
                            onChangeText={setCity}
                            value={city}
                            placeholder="City"
                        />
                        <TextInput
                            style={[styles.inputsmall, styles.lastNameInput]}
                            onChangeText={setZipCode}
                            value={zipCode}
                            placeholder="ZIP Code"
                        />
                    </View>

                  


                    <TextInput
                        style={styles.input}
                        onChangeText={setState}
                        value={state}
                        placeholder="State"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCountry}
                        value={country}
                        placeholder="Country"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                        placeholder="Password"
                    />

                    <View style={styles.termsContainer}>
                        <TouchableOpacity
                            style={styles.checkbox}
                            onPress={handleTermsToggle}
                        >
                            {acceptedTerms ? (
                                <Text style={styles.checkboxText}>✓</Text>
                            ) : null}
                        </TouchableOpacity>
                        <Text style={styles.termsText}>I agree to  terms & services</Text>
                    </View>

                    <TouchableOpacity style={styles.loginButton}>
                        <LinearGradient
                            colors={['#E37BD6', '#D11B70']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.loginText}>Create Account</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>
                            Already have account?
                        </Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={styles.signupLink}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </ScrollView>



        </ImageBackground>


    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 8,
        alignItems: "center"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },

    divsecond: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical:35

    },

    nameContainer: {
        flexDirection: 'row',

    },
    input: {
        width: '90%',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 5
    },
    inputsmall: {
        width: '43%',
        height: 50,
        margin: 7,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 30,
    },
    firstNameInput: {
        marginRight: 7,
    },
    lastNameInput: {
        marginLeft: 7,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    checkbox: {
        width: 23,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "purple",
        marginRight: 5,
        borderRadius: 7
    },
    checkboxText: {
        fontSize: 16,
        color: "white",
    },
    termsText: {
        fontSize: 16,
        color: "white"
    },

    loginButton: {
        width: '90%',
        height: 50,
        // borderWidth: 1,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 7,

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
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
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

    religionContainer: {
        width: '90%',
        borderRadius:30,
        backgroundColor:"white",
        height: 50,
        margin:5
      },
      religionPicker:{
      },

})