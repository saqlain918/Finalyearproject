import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const users = [
  {
    id: "1",
    name: "John Doe",
    role: "Farmer",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/50", // Replace with actual images
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Farmer",
    email: "jane@example.com",
    profilePicture: "https://via.placeholder.com/50", // Replace with actual images
  },
  {
    id: "3",
    name: "Robert Brown",
    role: "Farmer",
    email: "robert@example.com",
    profilePicture: "https://via.placeholder.com/50", // Replace with actual images
  },
];

const ManageProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Profiles</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.profilePicture }}
              style={styles.profilePicture}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 14,
    color: "#666",
  },
  email: {
    fontSize: 14,
    color: "#007BFF",
  },
});

export default ManageProfile;
