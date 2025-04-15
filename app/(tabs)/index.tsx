import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Tab = {
    name: string,
    href: string
}
const tabs: Tab[] = [
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
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </SafeAreaView>
    )
}

