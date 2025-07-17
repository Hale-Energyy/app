import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const {signOut} = useAuth();
  const handleSignout = () => {

    // Implement sign out logic here
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => signOut(),
      },
    ]);
  };
  return (
    <SafeAreaView className="flex flex-1">
      <Text>Profile</Text>

      {/* Sign out */}
      <View className="px-6 mb-8">
        <TouchableOpacity
          onPress={handleSignout}
          className="bg-red-600 rounded-2xl p-4 shadow-sm"
          activeOpacity={0.8}
        >
          <View className="flex-row items-center justify-center">
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className="text-white font-semibold text-lg  ml-2">
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
