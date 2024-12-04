import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/Launch Screen/Image 30.png')}
      style={styles.background}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Launch Screen/Image 33.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your music</Text>
        <Text style={styles.title}>Your</Text>
        <Text style={styles.title}>artists</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('CreateAccount')} // Điều hướng đến màn hình tạo tài khoản
        >
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginAccount')} // Điều hướng đến màn hình đăng nhập
        >
          <Text style={styles.loginText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
    color: 'white',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
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
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor:'white'
  },
  loginText: {
    color: '#00ADEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
