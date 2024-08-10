import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMesaages,js';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const {messages , loading} = useGetMessages();
  const lastMessageRef =useRef();

  useEffect(() => {
    // scroll to the bottom of the chat when new messages arrive
    setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, 100);
  }, [messages]);
  

  return (
    <div className='flex-1 overflow-y-auto px-4 text-sm'>
      {!loading && messages.length > 0 
      && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
        <Message  message={message} />
        </div>
      ))};

      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)};

      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-400'>Send a message to start the conversation</p>
      )};

    </div>
  );
};

export default Messages;
