import React, { useEffect } from 'react';
import  useConversations  from '../../zustand/useConversations';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import { useAuthContext } from '../../context/AuthContext';


const MessageContainer = () => {
    const { selectedConversation ,setSelectedConversation } = useConversations();

    useEffect(() => {
       return () => setSelectedConversation(null);

    },[setSelectedConversation]);

    return (
        <div className=' md:min-w-{450px} flex-1 flex flex-col '>
            {!selectedConversation ? (
                <NoChatSelected />
             ): (
                <>
                <div className='px-4 py-2 mb-2 bg-slate-500 bg-opacity-50 text-sm'>
                    <span className='label-text'>To:</span>
                    <span className='text-gray-200 font-bold'>{selectedConversation.fullname}</span>
                </div>
                <Messages />
                <MessageInput />
      
                </>
             ) }
            
            </div>
    );
  };

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();

  return (
    <div className=' flex justify-center items-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
        <p> Welcome to ChatJyuce  <br /> {authUser.fullname}   </p>
        <p className='text-gray-400'>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
       
    </div>
  );
};
