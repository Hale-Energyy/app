import Header from "@/app/components/profileSection/Header";
import AccountSettings from "@/app/components/user/AccountSettings";
import UserInfoCard from "@/app/components/user/UserInfoCard";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();
  const { user } = useUser();
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
    <View className="flex flex-1  ">
      <Header />

      <View className=" mt-4 mb-4 ml-4">
        <Text className="text-gray-900 font-semibold text-4xl ">Profile</Text>
        <Text className="text-gray-600 text-md mt-2">Manage your account</Text>
      </View>

      {/* User Info Card */}
      <UserInfoCard user={user} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* fitness Stats  */}
        <View className="flex bg-white py-5 px-4 rounded-2xl mx-4 mb-8 border border-gray-100 shadow-sm">
          <Text className="font-semibold ">Weekly Fitness Stats</Text>
          <View className="my-2 p-2 items-center">
            {/* Row for numbers */}
            <View className="flex-row justify-around items-center w-full">
              <View className="items-center">
                <Text className="font-semibold text-3xl text-blue-600">1</Text>
                <Text className="text-center mt-1 text-sm text-gray-600">
                  {"Total\nWorkouts"}
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-semibold text-3xl text-green-600">
                  33m20s
                </Text>
                <Text className="text-center mt-1 text-sm text-gray-600">
                  {"Total\nMinutes"}
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-semibold text-3xl text-purple-600">
                  3
                </Text>
                <Text className="text-center mt-1 text-sm text-gray-600">
                  {"Total\nSessions"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 ml-2 mb-4">
          <Text className="text-gray-900 font-semibold text-md mt-2">
            Account Settings
          </Text>
        </View>

        {/* User Actions */}

        <AccountSettings />
        {/* Sign out */}
        <View className="px-4 mb-8">
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
      </ScrollView>
    </View>
  );
}
