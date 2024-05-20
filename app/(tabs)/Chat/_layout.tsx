// chat/_layout.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import client from './StreamChatConfig';
import Index from './index';

const Stack = createStackNavigator();

const Layout: React.FC = () => {
  useEffect(() => {
    const setupClient = async () => {
      await client.connectUser(
        {
          id: 'user-id',
          name: 'username',
        },
        client.devToken('user-id')
      );
    };

    setupClient();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Chat" getComponent={Messages} />
          </Stack.Navigator>
        </NavigationContainer>
      </Chat>
    </OverlayProvider>
  );
};

export default Layout;
