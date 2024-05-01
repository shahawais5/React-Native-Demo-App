import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen3 = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Health Dashboard</Text>
        {/* You can add icons or buttons for navigation or actions here */}
      </View>

      {/* Health Content */}
      <View style={styles.content}>
        {/* Image or Icon representing health */}
        <Image
              source={{ uri: 'https://www.planstreetinc.com/wp-content/uploads/2021/07/what-is-mental-health.png' }} // Sample image URL
              style={styles.healthIcon}
        />
        {/* Health-related text */}
        <Text style={styles.healthText}>
          Stay healthy and active every day. Keep track of your fitness goals
          and monitor your progress.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  healthIcon: {
    width: 390,
    height: 350,
    marginBottom: 20,
  },
  healthText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Screen3;
