
import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversations from '../zustand/useConversations';
import notificationSound from '../assets/notificationsound/notification.mp3';

const useListenMesages = () => {
 const {socket} = useSocketContext();
 const {messages, setMessages} = useConversations();

 useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
        // Add a shake effect to the new message in the UI
        newMessage.shouldShake = true;
        
        // Play a notification sound when a new message arrives
        const sound = new Audio(notificationSound);
        sound.play();

        // Add new message to the messages array in the store and UI
     setMessages([...messages, newMessage]);
    })
    //cleanup when the component unmounts
    return () => socket?.off('newMessage');
 },[socket,setMessages,messages])

}

export default useListenMesages