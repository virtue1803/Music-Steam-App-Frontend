import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/Launch Screen - Premium/Image 112.png')} // Replace with your background image URL
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        {/* Replace this text with your logo component or image */}
        <Image source={require('../assets/Launch Screen - Premium/Image 113.png')} style={styles.logo} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>Premium</Text>
      <Text style={styles.title}>...</Text>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start listening</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32, // You can adjust or replace with an actual logo image
    color: 'white',
  },
   titleContainer: {
    alignItems: 'center',
    marginTop:300
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
