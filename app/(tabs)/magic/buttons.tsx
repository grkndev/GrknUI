import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { PulsatingButton } from "@/components/ui/magic/button";
import React from "react";


export default function MagicButtonScreen() {

  return (
    <SafeAreaView className="flex-1 bg-white p-8 gap-8">
      <Text className="text-6xl font-bold text-center">Buttons</Text>
      <PulsatingButton variant={"default"}>
        <Text>Default Pulsating Button</Text>
      </PulsatingButton>
    </SafeAreaView>
  )
}