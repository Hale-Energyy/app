import { View, Text } from 'react-native'
import React from 'react'

export default function UserStats() {
  return (
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
  )
}