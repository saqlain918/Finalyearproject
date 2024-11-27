import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ToastAndroid,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Email regex for validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// Password regex for at least 8 characters, one uppercase letter, and one special character
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
// CNIC regex (example for 13 digits)
const cnicRegex = /^[0-9]{13}$/;
// Phone number regex (example for phone number format)
const phoneRegex = /^[0-9]{10}$/;

const SignUp = () => {
  const { type } = useLocalSearchParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [cnic, setCnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmSize, setFarmSize] = useState(""); // For farmers
  const [rating, setRating] = useState(""); // For vendors/experts

  const handleSignUp = async () => {
    // Check if all required fields are filled
    if (
      !name ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !cnic ||
      !phoneNumber ||
      !address
    ) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    // Validate Name: Ensure no numeric digits in name
    if (/\d/.test(name)) {
      Alert.alert("Invalid Name", "Name should not contain numeric digits.");
      return;
    }

    // Validate Email
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Validate Password (8 characters, 1 uppercase, 1 special character)
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 8 characters long and contain at least one uppercase letter and one special character."
      );
      return;
    }

    // Validate Age: Ensure no alphabetic characters in age and it is a positive number
    if (/[a-zA-Z]/.test(age) || isNaN(age) || age <= 0) {
      Alert.alert(
        "Invalid Age",
        "Age should be a number and not contain alphabets."
      );
      return;
    }

    // Validate CNIC: Ensure it contains only numeric digits
    if (!cnicRegex.test(cnic)) {
      Alert.alert("Invalid CNIC", "Please enter a valid CNIC (13 digits).");
      return;
    }

    // Validate Phone Number (should be 10 digits)
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
      return;
    }

    // Validate Farm Size (if type is "farmer", should be a number)
    if (type === "farmer" && (isNaN(farmSize) || farmSize <= 0)) {
      Alert.alert("Invalid Farm Size", "Please enter a valid farm size.");
      return;
    }

    // Validate Rating (if type is "vendor" or "expert", should be a number)
    if (
      (type === "vendor" || type === "expert") &&
      (isNaN(rating) || rating <= 0)
    ) {
      Alert.alert("Invalid Rating", "Please enter a valid rating.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URI}/api/auth/signup`,
        {
          name,
          age: Number(age),
          gender,
          phoneNumber: Number(phoneNumber),
          farmSize: Number(farmSize),
          address,
          cnic: Number(cnic),
          rating,
          type,
          email,
          password,
        }
      );
      if (!res.data.success) {
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
        return;
      }
      await AsyncStorage.setItem("token", res.data.token);
      router.push("/Home");
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }

    // If all checks pass
    // Alert.alert("Success", `Welcome, ${name}!`);
    // router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type ? `${type} Sign Up` : "Sign Up"}</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Gender"
        style={styles.input}
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        placeholder="CNIC"
        style={styles.input}
        value={cnic}
        onChangeText={setCnic}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {/* Additional Fields for Farmer */}
      {type === "farmer" && (
        <TextInput
          placeholder="Farm Size (in acres)"
          style={styles.input}
          value={farmSize}
          onChangeText={setFarmSize}
          keyboardType="numeric"
        />
      )}

      {/* Additional Fields for Vendor */}
      {type === "vendor" && (
        <TextInput
          placeholder="Rating"
          style={styles.input}
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
      )}

      {/* Additional Fields for Expert */}
      {type === "expert" && (
        <TextInput
          placeholder="Rating"
          style={styles.input}
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
      )}

      <Button title="Sign Up" onPress={handleSignUp} color="#6A9E00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
});

export default SignUp;
