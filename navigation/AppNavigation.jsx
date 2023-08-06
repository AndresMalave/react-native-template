import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { themeColors } from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          backgroundColor: "#000",
          height: 70,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="inventory" component={HomeScreen} />
      <Tab.Screen name="favorite" component={HomeScreen} />
      <Tab.Screen name="profile" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == "home") {
    icon = focused ? (
      <FontAwesome name="home" size={30} color="black" />
    ) : (
      <FontAwesome name="home" size={30} color="white" />
    );
  } else if (route.name == "inventory") {
    icon = focused ? (
      <FontAwesome name="heart" size={30} color="black" />
    ) : (
      <FontAwesome name="heart" size={30} color="white" />
    );
  } else if (route.name == "favorite") {
    icon = focused ? (
      <FontAwesome name="heart" size={30} color="black" />
    ) : (
      <FontAwesome name="heart" size={30} color="white" />
    );
  } else if (route.name == "profile") {
    icon = focused ? (
      <FontAwesome name="heart" size={30} color="black" />
    ) : (
      <FontAwesome name="heart" size={30} color="white" />
    );
  } else if (route.name == "cart") {
    icon = focused ? (
      <FontAwesome name="shopping-cart" size={24} color="black" />
    ) : (
      <FontAwesome name="shopping-cart" size={30} color="white" />
    );
  }
  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
