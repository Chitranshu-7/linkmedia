import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { NativeBaseProvider, Input, Button, Icon, Box, AspectRatio, useTheme } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Login() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <Input
          variant="outline"
          placeholder="Username or Email"
          style={styles.input}
          InputLeftElement={
            <Icon
              as={FontAwesome5}
              name="user-secret"
              size={12}
              color={theme.colors.black}
              style={styles.icon}
            />
          }
        />
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <Input
          variant="outline"
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          InputLeftElement={
            <Icon
              as={FontAwesome5}
              name="key"
              size={12}
              color={theme.colors.black}
              style={styles.icon}
            />
          }
        />
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Button>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

     
       
    </View>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Login />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signupText: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    top: '27%',
    left: 10,
    transform: [{ translateY: -8 }],
  },
  buttonDesign: {
    backgroundColor: '#026efd',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
});
