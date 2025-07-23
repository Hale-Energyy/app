import React from "react";
import { Image, Text, View } from "react-native";

export default function UserInfoCard({user}) {

  return (
    <View className="flex bg-white py-5 px-4 rounded-2xl mx-4 mb-8 border border-gray-100 shadow-sm">
      <View className="flex flex-row items-center">
        {/* Profile Picture  */}
        <View className="basis-[20vw] ">
          <Image
            source={{
              uri: user?.imageUrl || "https://via.placeholder.com/150",
            }}
            className="rounded-full items-center justify-center"
            style={{ width: 70, height: 70, borderRadius: 100, aspectRatio: 1 }}
          />
        </View>

        {/* User Info */}
        <View className="basis-[70vw] ml-2 ">
          <Text className="text-gray-800 font-semibold text-lg">
            {user?.firstName && user?.lastName
              ? `${user.firstName} ${user.lastName}`
              : user?.firstName || "User"}
          </Text>
          <Text className="text-gray-600 ">
            {user?.emailAddresses?.[0]?.emailAddress}
          </Text>
          <Text className="ttext-gray-600 text-xs">Member since june 2025</Text>
        </View>
      </View>
    </View>
  );
}
