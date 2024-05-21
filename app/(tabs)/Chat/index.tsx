// chat/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, MessageList, MessageInput, Chat, OverlayProvider, DefaultStreamChatGenerics } from 'stream-chat-expo';


import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StreamChat } from 'stream-chat';


const Index: React.FC = () => {
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {r
    const setupChannel = async () => {
      const channel = client.channel('messaging', 'general', {
        name: 'General',
      });
      await channel.watch();
      setChannel(channel);
    };

    setupChannel();
  }, []);

  if (!channel) {
    return <Text>Loading...</Text>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <Chat client={undefined}>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default Chat;
