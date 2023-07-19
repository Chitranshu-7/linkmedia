import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, StatusBar, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function Registration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const handleRegister = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (surname.trim() === '') {
      Alert.alert('Error', 'Please enter your surname');
      return;
    }

    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    // Perform registration logic here

    Alert.alert('Success', 'Registration successful!');
  };

  return (
    


      <ScrollView>
    <View  style={styles.container}>

    <StatusBar backgroundColor="transparent" translucent={true} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <Button title="Register" onPress={handleRegister} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});
