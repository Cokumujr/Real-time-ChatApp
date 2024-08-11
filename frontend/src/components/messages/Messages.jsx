import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMesaages.js';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMesages from '../../hooks/useListenMesages.js';

const Messages = () => {
  const {messages , loading} = useGetMessages();
  useListenMesages();
  // keep track of the last seen message id to scroll to the bottom of the chat
  const lastMessageRef =useRef();

  useEffect(() => {
    // scroll to the bottom of the chat when new messages arrive
    setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, 100);
  }, [messages]);
  

  return (
    <div className='flex-1 overflow-y-auto px-4 text-sm'>
      {loading ? (
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      ) : (
        <p className='text-center text-gray-400 font-bold'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
