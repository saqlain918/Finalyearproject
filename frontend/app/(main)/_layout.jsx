import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
};

export default MainLayout;
