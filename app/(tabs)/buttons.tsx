import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import React from "react";


export default function ButtonScreen() {

  return (
    <SafeAreaView className="flex-1 bg-white p-8 gap-8">
      <Text className="text-6xl font-bold text-center">Buttons</Text>
      <Button variant={"default"}>
        <Text>Default Button</Text>
      </Button>

      <Button variant={"destructive"}>
        <Text>Destructive Button</Text>
      </Button>

      <Button variant={"outline"}>
        <Text>Outline Button</Text>
      </Button>

      <Button variant={"secondary"}>
        <Text>Secondary Button</Text>
      </Button>

      <Button variant={"ghost"}>
        <Text>Ghost Button</Text>
      </Button>

      <Button variant={"link"}>
        <Text>Link Button</Text>
      </Button>
    </SafeAreaView>
  )
}