import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import axios from 'axios';  // Import axios for HTTP requests

export default function CreateAccount({ navigation }) {
  const [username, setUsername] = useState(''); // Thêm state cho username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async () => {
  console.log('Creating account...'); // Log khi bắt đầu tạo tài khoản

  if (!username || !email || !password || !confirmPassword) {
    console.log('Validation failed: Some fields are empty'); // Log nếu có trường không hợp lệ
    Alert.alert('Error', 'All fields are required');
    return;
  }

  if (password !== confirmPassword) {
    console.log('Validation failed: Passwords do not match'); // Log nếu mật khẩu không khớp
    Alert.alert('Error', 'Passwords do not match');
    return;
  }

  try {
    // Log dữ liệu gửi lên server
    console.log('Sending request to backend with data: ', {
      username,
      email,
      password,
    });

    // Gửi yêu cầu POST đến backend để tạo người dùng mới
    const response = await axios.post('http://192.168.1.10:8080/api/users', {
      username,
      email,
      password,
    });

    console.log('Received response from server: ', response); // Log kết quả trả về từ server

    if (response.status === 200) {
      console.log('Account created successfully'); // Log khi tài khoản được tạo thành công
      // Hiển thị thông báo thành công và chuyển hướng tới màn hình Login
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('LoginAccount');
    } else {
      console.log('Failed to create account, status:', response.status); // Log nếu server trả về status khác 200
      Alert.alert('Error', 'Failed to create account');
    }
  } catch (error) {
    // Log lỗi khi gửi yêu cầu
    console.error('Error details: ', error); 
    console.log('Error message: ', error.message); // Log thông báo lỗi chung

    if (error.response) {
      // Lỗi trả về từ server
      console.log('Server error response: ', error.response);
      Alert.alert('Error', `Server error: ${error.response.data}`);
    } else {
      // Lỗi không thể kết nối được tới server
      console.log('Network error or no response from server: ', error.message);
      Alert.alert('Error', `Network error: ${error.message}`);
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
          <Text style={styles.title}>Create an account</Text>
        </View>

        {/* Thêm trường nhập liệu cho username */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleCreateAccount}>
          <Text style={styles.submitText}>Create an account</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginAccount')}>
            <Text style={styles.loginText}>Already have an account? Log in</Text>
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
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginText: {
    color: '#00ADEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
