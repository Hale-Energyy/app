import { View, Text, TouchableOpacity } from 'react-native'
import React, { use } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Divider from '../extras/Divider'
import { useNavigation } from 'expo-router'
import { NavigationProp } from '@react-navigation/native'

type RootStackParamList = {
  editProfile: undefined;
    notifications: undefined;
    preferences: undefined;
    helpSupport: undefined;
    subscription: undefined;
  // add other routes here if needed
};

export default function AccountSettings() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
      <View className="flex bg-white py-5 px-4 rounded-2xl mx-4 mb-8 border border-gray-100 shadow-sm">
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center " onPress={() => navigation.navigate("editProfile")}>
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
          <TouchableOpacity className="flex flex-row justify-between items-center " onPress={() => navigation.navigate("notifications")}>
            <View className="flex flex-row rounded-full items-center ">
              <View className="ml-2 bg-green-50 items-center p-2 flex rounded-full">
                <Ionicons
                  name="notifications-outline"
                  size={18}
                  color="green"
                />
              </View>

              <Text className="text-gray-900 text-lg ml-5">
                Notifications
              </Text>
            </View>
            <Ionicons className="mr-3 " name="chevron-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
        <Divider className=" bg-gray-100" />
        <View className="py-3">
          <TouchableOpacity className="flex flex-row justify-between items-center " onPress={() => navigation.navigate("preferences")}>
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
          <TouchableOpacity className="flex flex-row justify-between items-center " onPress={() => navigation.navigate("helpSupport")}>
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
          <TouchableOpacity className="flex flex-row justify-between items-center " onPress={() => navigation.navigate("subscription")}>
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
  )
}