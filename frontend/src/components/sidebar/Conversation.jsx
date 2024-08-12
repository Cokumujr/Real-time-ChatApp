import React from 'react'
import  useConversations  from '../../zustand/useConversations';
import { useSocketContext } from '../../context/SocketContext';
import extractDate from '../../utils/extractDate';

const Conversation = ({conversation}) => {
  const { selectedConversation ,setSelectedConversation } = useConversations();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const convoDate = extractDate(conversation.updatedAt);
  
  const handleClick = () => {
    setSelectedConversation(conversation);
  }

  return (
    <>
    <div className={`flex items-center gap-2 hover:bg-purple-700 rounded p-2 cursor-pointer ${isSelected ? 'bg-fuchsia-950' : ''} `} onClick={handleClick}>
      <div className={`avatar ${isOnline? 'online' : ''} `}>
        <div className='w-8 rounded-full'>
          <img src={conversation.profilepic} alt="user avatar" />
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-gray-300 text-sm'>{conversation.fullname}</p>
          <span className='text-xs text-gray-400'>{convoDate}</span>
        </div>
        <p className='text-gray-400 text-xs truncate'>Start Chat...</p>
      </div>
    </div>
  
    </>
  )
}

export default Conversation