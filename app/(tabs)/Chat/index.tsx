import React from "react";
import { StreamChat } from "stream-chat";
import { Chat, Channel, MessageList, DefaultStreamChatGenerics, OverlayProvider } from 'stream-chat-expo';
import ChannelComponent from "./ChannelComponent";
const API_KEY = "4qs628f6q3nc";
const client=StreamChat.getInstance(API_KEY);

const ChatScreen = () => {
  return (
  <OverlayProvider> 
    <Chat client={client}>
      <Channel
        channel={{ type: "messaging", id: "general" }}
      >
        <MessageList />
      </Channel>
    </Chat>
    </OverlayProvider>   
  );
};

export default ChatScreen;

 // Ensure you export the ChatScreen component


