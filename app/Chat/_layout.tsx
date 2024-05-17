import { Stack } from "expo-router";
import React, { useEffect } from "react";
import {StreamChat} from "stream-chat";

const API_KEY = '4qs628f6q3nc';
const client = StreamChat.getInstance(API_KEY);

export default function ChatLoayout() {

    useEffect(() => {

        const connectUser = async() => {
            await client.connectUser({
                id: 'dj',
                name: 'Dj',
                image: 'https://i.imgur.com/fR9Jz14'
            }, 
          client.devToken('Dj')  
        );
    };

        connectUser();
}, []);


    return <Stack>
        <Stack.Screen name="index" options={{title: 'Messages'}} />
    </Stack>
}