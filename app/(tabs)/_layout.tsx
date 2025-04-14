import { Slot, Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabLayout() {

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="explore" options={{ title: 'Explore' }} />
      </Stack>
  );
}
