import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
    
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <ImageBackground
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfs_OxsQcGueoTii3b4I5_efO_nhUxbXSFxN0-VXzkA&s' }} // Sample image URL
    style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.appName}>React Native App</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add opacity to background
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SplashScreen;
