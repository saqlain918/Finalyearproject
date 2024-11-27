import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ConsultExpert = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consult Expert</Text>

      {/* Options */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Ask a Question</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Schedule a Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Expert Directory</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  options: {
    flexDirection: "column",
    marginTop: 10,
  },
  option: {
    backgroundColor: "#E8F5E9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#2E7D32",
    fontWeight: "bold",
  },
});

export default ConsultExpert;
