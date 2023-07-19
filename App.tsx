import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash1 from './src/Component/Splash1';
import HomeScreen from './src/Component/HomeScreen';
import Login from './src/Component/Login';
import ForgotPass from './src/Component/ForgotPass';
import OtpVeri from './src/Component/OtpVeri';
import Registration from './src/Component/Registration';



const Stack = createNativeStackNavigator();
export default function App({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash1'  component={Splash1}></Stack.Screen> 
         <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
         <Stack.Screen name='Login' component={ Login}></Stack.Screen>
         <Stack.Screen name='ForgotPass' component={ForgotPass}></Stack.Screen>
         <Stack.Screen name='OtpVeri' component={OtpVeri}></Stack.Screen>
         <Stack.Screen name='Registration' component={Registration}></Stack.Screen>

       
      </Stack.Navigator>
    </NavigationContainer>
  )
}