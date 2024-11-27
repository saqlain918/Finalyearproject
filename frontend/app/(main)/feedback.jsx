import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Feedback = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your feedback here..."
        multiline
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    height: 150,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Feedback;
