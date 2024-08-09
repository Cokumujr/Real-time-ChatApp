import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex items-center gap-2 hover:bg-purple-700 rounded p-2 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-8 rounded-full'>
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-gray-300'>John Doe</p>
          <span className='text-sm text-gray-400'>10:00</span>
        </div>
        <p className='text-gray-400 text-sm truncate'>Last message...</p>
      </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation