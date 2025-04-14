import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-6xl font-bold">Home</Text>
      <Button variant={"default"}>
        <Text>Click me</Text>
      </Button>
    </SafeAreaView>
  )
}