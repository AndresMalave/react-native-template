import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex h-full items-center justify-center bg-blue-400">
      <Text>Open up App.js to start working on your app!</Text>
      <Text>ESTA ES LA PAGINA DE HOME</Text>
      <TouchableOpacity
        className="p-3 px-8 rounded-full bg-black mt-5"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white">Ir a Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
