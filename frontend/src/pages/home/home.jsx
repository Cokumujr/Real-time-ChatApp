import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';


const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='flex w-full max-w-7xl h-[80vh] rounded-lg overflow-hidden bg-brown-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
