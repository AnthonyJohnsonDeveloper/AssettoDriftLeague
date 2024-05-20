// chat/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, MessageList, MessageInput } from 'stream-chat-expo';
import client from './StreamChatConfig';

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
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default Index;
