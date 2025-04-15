import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const tabs = [
    {
        name: "Buttons",
        href: "/buttons"
    },
    {
        name: "Magic",
        href: "/magic-buttons"
    }
]
export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white p-8 gap-8">
            <View className="flex-1 items-center justify-center">
                <Text className="text-6xl font-bold">Home</Text>
            </View>
        </SafeAreaView>
    )
}