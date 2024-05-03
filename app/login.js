import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const handleLogin = async () => {
    let isValid = true;
  
    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }
  
    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    if (isValid) {
      try {
        setLoading(true); // Show loading indicator
    
        const response = await axios.post(
          'https://app.onediamond-staging.trilloapps.com/ajaxLogin',
          {
            username,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
              'x-org-name': 'cloud',
              'x-app-name': 'main',
            },
          }
        );
    
        setLoading(false); // Hide loading indicator
    
        if (response.status === 200) {
          // Assuming your API returns a token upon successful login
          const token = response.data.token;
          console.warn(token);
          // Navigate to home screen upon successful login
          navigation.navigate('ParentScreen');
        } else {
          console.log('Unexpected status code:', response.status);
          alert('An error occurred. Please try again later.'); // Handle unexpected status code
        }
      } catch (error) {
        setLoading(false); // Hide loading indicator
        if (error.response && error.response.status === 401) {
          console.log('Bad Credentials');
          alert('Invalid username or password. Please try again.'); // Handle 401 error
        } else {
          console.log('An error occurred:', error);
          alert('An error occurred. Please try again later.'); // Handle other errors
        }
      }
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
