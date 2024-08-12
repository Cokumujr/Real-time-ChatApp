import React from 'react';
import useConversations from '../../zustand/useConversations';
import {useAuthContext }from '../../context/AuthContext';
import extractTime from '../../utils/extractTime';

const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversations();
  const fromMe = message.senderId === authUser._id;
  const chatTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilepic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
  const bubbleColor = fromMe ? 'chat-bubble bg-purple-600 text-gray-100' : 'chat-bubble bg-white text-gray-900';

  const shakeClass = message.shouldShake? 'shake' : '';

  console.log('Profile Pic URL:', profilepic);

    return (
        <>
        
        <div className={`chat ${chatClassName} mb-2 `}>
        <div className='chat-image avatar'>
          <div className='w-5 rounded-full'>
            <img src={profilepic} alt="user avatar" />
          </div>
        </div>
        <div className={`${bubbleColor} text-sm py-1 px-2 ${shakeClass}`}>
          {message.message}
        </div>
        <div className='chat-footer text-xs opacity-50 flex gap-1 items-center'>
          {chatTime}
        </div>
      </div>
      
      </>
    );
  };

export default Message;
