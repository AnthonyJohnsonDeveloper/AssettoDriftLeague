import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-expo";

const API_KEY = "4qs628f6q3nc"
const client = StreamChat.getInstance(API_KEY);

export default function ChatLoayout() {
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "dj",
          name: "Dj",
          image: "https://i.imgur.com/fR9Jz14",
        },
        client.devToken("dj")
      );

      const channel = client.channel("Livestream", "public", {
        name: "Public",
      });
      await channel.create();
    };

    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <Stack>
      
        <Stack.Screen name="index" options={{ title: "Messages" }} />
      
    </Stack>
  );
}
