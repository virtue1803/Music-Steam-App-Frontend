import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Đảm bảo bạn đã cài axios

export default function LoginAccount({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Both fields are required');
    console.log('Login failed: Missing email or password');
    return;
  }

  try {
    // Log thông tin email và mật khẩu (tránh in mật khẩu trong môi trường sản xuất)
    console.log('Logging in with email:', email);

    // Gửi yêu cầu POST đến backend để đăng nhập người dùng
    const response = await axios.post('http://192.168.1.10:8080/api/users/login', {
      email,
      password,
    });

    // Log response để kiểm tra kết quả từ server
    console.log('Login response:', response);

    // Kiểm tra kết quả từ backend
    if (response.status === 200) {
  Alert.alert('Success', 'You are now logged in!');

  

  navigation.navigate('Home');
} else {
      Alert.alert('Error', 'Invalid credentials');
      console.log('Invalid credentials: response status', response.status);
    }
  } catch (error) {
    // Log lỗi nếu có
    console.error("Login error details: ", error.response ? error.response.data : error.message);
    
    if (error.response) {
      // Lỗi trả về từ server
      Alert.alert('Error', `Server error: ${error.response.data}`);
      console.log('Server error response:', error.response.data);
    } else {
      // Lỗi không thể kết nối được tới server
      Alert.alert('Error', `Network error: ${error.message}`);
      console.log('Network error:', error.message);
    }
  }
};


  return (
    <ImageBackground
      source={require('../assets/Launch Screen/Image 30.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Your Music</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Log in to your account</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createAccountButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
