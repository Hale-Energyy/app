import Divider from "@/app/components/extras/Divider";
import Header from "@/app/components/profileSection/Header";
import UserInfoCard from "@/app/components/user/UserInfoCard";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

      <View className="px-4 ml-2 mb-4">
        <Text className="text-gray-900 font-semibold text-md mt-2">
          Account Settings
        </Text>
      </View>

      {/* User Actions */}
      <View className="flex bg-white py-5 px-4 rounded-2xl mx-4 mb-8 border border-gray-100 shadow-sm">
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center ">
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-blue-50 items-center p-2 flex rounded-full">
                <Ionicons
                  className="font-semibold"
                  name="person-outline"
                  size={18}
                  color="#2563eb"
                />
              </View>
              <Text className="text-gray-900  text-lg ml-5">
                Edit Profile
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
        <Divider className=" bg-gray-100" />
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center ">
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-green-50 items-center p-2 flex rounded-full">
                <Ionicons
                  name="notifications-outline"
                  size={18}
                  color="green"
                />
              </View>

              <Text className="text-gray-900 text-lg ml-5">
                Notification
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
        <Divider className=" bg-gray-100" />
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center ">
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-purple-50 items-center p-2 flex rounded-full">
                <Ionicons name="settings-outline" size={18} color="purple" />
              </View>
              <Text className="text-gray-900 text-lg ml-5">
                Preferences
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
        <Divider className=" bg-gray-100" />
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center ">
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-orange-50 items-center p-2 flex rounded-full">
                <Ionicons name="help-circle-outline" size={20} color="orange" />
              </View>

              <Text className="text-gray-900 text-lg ml-5">
                Help & Support
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
        <Divider className=" bg-gray-100" />
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center ">
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-brown-50 items-center p-2 flex rounded-full">
                <Ionicons name="wallet-outline" size={18} color="brown" />
              </View>

              <Text className="text-gray-900 text-lg ml-5">
                Subscription
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

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
    </View>
  );
}
