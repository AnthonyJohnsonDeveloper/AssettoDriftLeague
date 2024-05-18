// ChannelComponent.tsx

import React from "react";
import { Channel, MessageList, MessageInput } from 'stream-chat-expo';

// Define the type for the props
interface ChannelComponentProps {
  channel: {
    type: string;
    id: string;
    // Add other necessary properties like 'members', 'messages', etc.
  };
}

const ChannelComponent: React.FC<ChannelComponentProps> = ({ channel }) => {
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelComponent;
