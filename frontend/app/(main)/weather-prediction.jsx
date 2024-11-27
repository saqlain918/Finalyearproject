import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherPrediction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Prediction</Text>
      <Text style={styles.content}>
        View weather forecasts to plan your farming activities effectively.
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

export default WeatherPrediction;
