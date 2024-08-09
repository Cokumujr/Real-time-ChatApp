import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
    return (
        <div className='w-1/4 min-w-[250px] max-w-[300px] border-r border-gray-700 flex flex-col'>
        <div className='p-4'>
          <SearchInput />
        </div>
        <div className='divider my-1 py-1 h-1 border-gray-700'></div>
        <div className='flex-1 overflow-y-auto'>
          <Conversations />
        </div>
        <div className='p-4 mt-auto'>
          <LogoutButton />
        </div>
      </div>
    );
  };

export default Sidebar;
