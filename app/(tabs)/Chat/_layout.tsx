import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-expo";

const API_KEY = "4qs628f6q3nc"
const client = StreamChat.getInstance(API_KEY);

export default function ChatLoayout() {
  return (
    <Stack>
      
        <Stack.Screen name="index" options={{ title: "Messages" }} />
      
    </Stack>
  );
}
