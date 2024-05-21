import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import client from './StreamChatConfig';
import Index from './index';
import { StreamChat } from 'stream-chat';

import {  DefaultStreamChatGenerics } from 'stream-chat-expo';
const Stack = createStackNavigator();

const Layout: React.FC = () => {
  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: 'user-id',
            name: 'username',
          },
          client.devToken('user-id')
        );
      } catch (error) {
        console.error('Error connecting user:', error);
      }
    };

    setupClient();

    return () => {
      client.disconnectUser();
    };
  }, []);



const Stack = createStackNavigator();

type ChatProps = {
  client: StreamChat<DefaultStreamChatGenerics>;
};

const Layout: React.FC<ChatProps> = ({ client }) => {
  useEffect(() => {
    // ...
  }, []);

  return (
    <Chat client={client}>

        <Stack.Navigator>
          <Stack.Screen name="Chat" component={Index} />
        </Stack.Navigator>
      </Chat>
    );
};

export default Layout;

