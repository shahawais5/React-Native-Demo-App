import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const products = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$20" },
  { id: 3, name: "Product 3", price: "$30" },
  { id: 4, name: "Product 4", price: "$40" },
  { id: 5, name: "Product 5", price: "$50" },
  { id: 6, name: "Product 6", price: "$60" },
  { id: 7, name: "Product 1", price: "$10" },
  { id: 8, name: "Product 2", price: "$20" },
  { id: 9, name: "Product 3", price: "$30" },
  { id: 43, name: "Product 4", price: "$40" },
  { id: 52, name: "Product 5", price: "$50" },
  { id: 62, name: "Product 6", price: "$60" },
];

const Screen2 = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Button
            title="Go back!"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      );
      

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Set the number of columns in the grid
      contentContainerStyle={styles.container} // Apply container styles
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default Screen2;
