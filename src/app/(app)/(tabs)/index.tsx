
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex flex-1">
      <Header />
      <Content />
    </SafeAreaView>
  );
}

function Content() {
  return (
    <View className="flex-1">
     <Text>Hello</Text>
    </View>
  );
}

function Header() {
  return (
    <View className="bg-white shadow-sm dark:bg-gray-800">
      <View className="px-4 lg:px-6 h-12 flex items-center flex-row justify-between ">

      </View>
    </View>
  );
}
