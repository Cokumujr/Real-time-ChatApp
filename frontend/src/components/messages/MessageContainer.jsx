import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';


const MessageContainer = () => {
    const noChatSelected = false;
    return (
        <div className=' md:min-w-{450px} flex-1 flex flex-col '>
            {noChatSelected? (
                <NoChatSelected />
             ): (
                <>
                <div className='px-4 py-2 mb-2 bg-slate-500 bg-opacity-50 text-sm'>
                    <span className='label-text'>To:</span>
                    <span className='text-gray-200 font-bold'> John Doe</span>
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
  return (
    <div className=' flex justify-center items-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
        <p> Welcome to Lets Chat <br /> John Doe   </p>
        <p className='text-gray-400'>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
       
    </div>
  );
};
