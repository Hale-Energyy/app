import Header from "@/app/components/profileSection/Header";
import UserStats from "@/app/components/fitness/UserFitnessStats";
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
        <UserStats />
      


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
