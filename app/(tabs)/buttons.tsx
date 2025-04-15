import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import React from "react";
import { router } from "expo-router";

export default function ButtonScreen() {

  return (
    <SafeAreaView className="flex-1 bg-white p-8 gap-8">
      <Text className="text-6xl font-bold text-center">Buttons</Text>
      <Button variant={"default"} onPress={() => router.back()}>
        <Text>Default Button</Text>
      </Button>

      <Button variant={"destructive"} onPress={() => router.back()}>
        <Text>Destructive Button</Text>
      </Button>

      <Button variant={"outline"} onPress={() => router.back()}>
        <Text>Outline Button</Text>
      </Button>

      <Button variant={"secondary"} onPress={() => router.back()}>
        <Text>Secondary Button</Text>
      </Button>

      <Button variant={"ghost"} onPress={() => router.back()}>
        <Text>Ghost Button</Text>
      </Button>

      <Button variant={"link"} onPress={() => router.back()}>
        <Text>Link Button</Text>
      </Button>
    </SafeAreaView>
  )
}