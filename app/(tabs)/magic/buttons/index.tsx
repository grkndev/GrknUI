import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PulsatingButton } from '@/components/ui/magic/PulsatingButton'
import { RainbowButton } from '@/components/ui/magic/RainbowButton'
import { Text } from '@/components/ui/text'
type Tab = {
    name: string,
    href: string
}
const tabs: Tab[] = [
    {
        name: "Pulsating Button",
        href: "/magic/buttons/PulsatingButton"
    },
]
export default function MagicHomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white p-8 gap-8">
            <Text className='text-5xl font-bold text-center'>Magic Buttons</Text>
            <PulsatingButton>
                <Text>Pulsating Button</Text>
            </PulsatingButton>
            <RainbowButton>
                <Text>Rainbow Button</Text>
            </RainbowButton>
        </SafeAreaView>
    )
}