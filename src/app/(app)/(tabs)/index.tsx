
import Header from "@/app/components/profileSection/Header";
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


