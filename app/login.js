import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { myAxiosAuthenticatedRequest } from './MyAxiosApisReq';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false); 


  const handleLogin = async () => {
    try {
      const apiUrl = 'https://app.onediamond-staging.trilloapps.com/ajaxLogin';
      const data = {
        username: username,
        password: password
      };
      const response = await myAxiosAuthenticatedRequest(apiUrl, data);
      // Save the token to AsyncStorage
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      const accessToken = AsyncStorage.getItem('accessToken');
      console.log({accessToken});
      navigation.navigate('ParentScreen');
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>React Native</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
        {usernameError !== '' && <Text style={styles.errorText}>{usernameError}</Text>}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          // secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
        {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={loading}>
        <Text style={styles.loginText}>{loading ? 'Logging in...' : 'LOGIN'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'blue',
    marginBottom: 12,
    marginTop: 250,
  },
  inputView: {
    width: '80%',
    borderRadius: 25,
    height: 40,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
  inputText: {
    
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  errorText: {
    // textAlign: 'left',
    color: 'red',
  },
});

export default LoginScreen;
