import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfs_OxsQcGueoTii3b4I5_efO_nhUxbXSFxN0-VXzkA&s' }} // Sample image URL
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Beautiful Nature Islamabad</Text>
          <Text style={styles.description}>
          These are the best places for kid-friendly 
          nature & parks in Islamabad Capital Territory: Margalla Hills 
          · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....
          </Text>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default HomeScreen;
