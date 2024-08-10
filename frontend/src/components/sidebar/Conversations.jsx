import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);

  return (
    <div className='flex-1 flex-col overflow-y-auto'>
      {loading ? (
        <span className='loading loading-spinner  mx-auto'></span>
      ) : (
        conversations.map((conversation) => (
          <div key={conversation._id}>
            <Conversation conversation={conversation} />
            <div className='divider my-0 py-0 h-1'></div>
          </div>
        ))
      )}
    </div>
  );
};

export default Conversations;
