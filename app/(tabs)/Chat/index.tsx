// chat/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, MessageList, MessageInput, Chat, OverlayProvider } from 'stream-chat-expo';
import client from './StreamChatConfig';

import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Index: React.FC = () => {
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
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
        <Chat>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default Index;
