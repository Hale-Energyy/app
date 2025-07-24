import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useUser } from "@clerk/clerk-expo";

export default function Layout() {
  const { user } = useUser();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          headerShown: false,
          title: "Workout",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="excercises"
        options={{
          headerShown: false,
          title: "Excercise",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            //   <AntDesign name='user' color={color} size={size} />
            <Image
              source={{
                uri: user?.imageUrl || "https://via.placeholder.com/150",
              }}
              resizeMode="cover"
              className="rounded-full"
              style={{ width: 28, height: 28, borderRadius: 100 }}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            navigation.navigate("profile"); // Go to parent
          },
        })}
      />
    </Tabs>
  );
}
