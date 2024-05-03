import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const data = [
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfs_OxsQcGueoTii3b4I5_efO_nhUxbXSFxN0-VXzkA&s',
    title: 'Beautiful Nature Islamabad',
    description: 'These are the best places for kid-friendly nature & parks in Islamabad Capital Territory: Margalla Hills · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....'
  },
  {
    id: 2,
    imageUrl: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2MTYwNTUzNTI5MTI0MzU3/islamabad-the-beautiful.jpg',
    title: 'Faisal Masjid Islamabad',
    description: 'These are the best places for kid-friendly nature & parks in Islamabad Capital Territory: Margalla Hills · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....'
  },
  {
    id: 3,
    imageUrl: 'https://www.thenews.com.pk/assets/uploads/akhbar/2022-01-17/925895_9539798_Islamabad2_akhbar.jpg',
    title: 'Centaurus View Islamabad',
    description: 'These are the best places for kid-friendly nature & parks in Islamabad Capital Territory: Margalla Hills · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....'
  }
];

const Screen1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    marginBottom: 20,
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

export default Screen1;
