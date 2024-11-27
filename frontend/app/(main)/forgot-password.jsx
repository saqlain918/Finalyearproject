import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }
    // Perform reset password logic here
    Alert.alert("Success", "Password reset instructions sent to your email.");
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Reset Password"
          onPress={handleResetPassword}
          color="#6A9E00"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Back to Login"
          onPress={() => router.push("/login")}
          color="#FFD700"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default ForgotPassword;
