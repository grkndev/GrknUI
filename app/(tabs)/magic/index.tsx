import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { router } from 'expo-router'
type Tab = {
    name: string,
    href: string
}
const tabs: Tab[] = [
    {
        name: "Buttons",
        href: "/magic/buttons"
    },
]
export default function MagicHomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white p-8 gap-8">
            <Text className='text-6xl font-bold text-center'>Magic</Text>
            <FlatList
                data={tabs}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between", gap: 8 }}
                keyExtractor={(item) => `${item.name}-${item.href}`}
                renderItem={({ item }) => (
                    <TabItem item={item} />
                )}
            />
        </SafeAreaView>
    )
}

function TabItem({ item }: { item: Tab }) {
    return (
        <Pressable onPress={() => router.push(item.href as any  )} className='flex-1 aspect-video '>
            <Card className="items-center justify-center flex-1">
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                </CardHeader>
            </Card>
        </Pressable>
    )
}
