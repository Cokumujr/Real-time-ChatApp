import React from 'react';

const Message = () => {
    return (
        <>
        <div className='chat chat-start mb-2'>
          <div className='chat-bubble text-gray-900 bg-white text-sm py-1 px-2'>
            Hello, how are you today?
          </div>
          <div className='chat-footer text-xs opacity-50 flex gap-1 items-center'>
            10:00 AM
          </div>
        </div>
      <div className='chat chat-end mb-2'>
        <div className='chat-image avatar'>
          <div className='w-5 rounded-full'>
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
          </div>
        </div>
        <div className='chat-bubble text-gray-100 bg-purple-600 text-sm py-1 px-2'>
          We Mzee! Semaje?
        </div>
        <div className='chat-footer text-xs opacity-50 flex gap-1 items-center'>
          10:30 AM
        </div>
      </div>
      </>
    );
  };

export default Message;
