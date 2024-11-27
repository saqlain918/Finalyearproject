import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ManageAds = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Ads</Text>
      <Text style={styles.content}>
        Here you can manage all your advertisements, update existing ones, or
        create new ads for your farm.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#555",
  },
});

export default ManageAds;
