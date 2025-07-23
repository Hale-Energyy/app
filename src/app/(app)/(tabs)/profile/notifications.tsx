import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/app/components/profileSection/Header'

export default function notifications() {
  return (
    <View>
        <Header />
        <Text className="text-gray-900 font-semibold text-4xl ml-4 mt-4">
        Notifications
        </Text>
    </View>
  )
}