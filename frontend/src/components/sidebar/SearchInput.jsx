import React, { useState, useEffect, useRef } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversations from '../../zustand/useConversations';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);
  const { setSelectedConversation, selectedConversation } = useConversations();
  const { conversations } = useGetConversations();
  const selectedRef = useRef(null);

  useEffect(() => {
    if (search.length >= 3) {
      const filtered = conversations.filter((conversation) => 
        conversation.fullname.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredConversations(filtered);
    } else {
      setFilteredConversations([]);
    }
  }, [search, conversations]);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedConversation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }
    if (filteredConversations.length > 0) {
      setSelectedConversation(filteredConversations[0]);
      toast.success('Conversation selected');
    } else {
      toast.error('No conversation found');
    }
    setSearch("");
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    toast.success('Conversation selected');
    setSearch("");
  };

  return (
    <div>
      <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Search..'
          className='input input-bordered rounded-full w-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type='submit'
          className='btn btn-circle bg-purple-500 btn-glass flex-shrink-0'
        >
          <IoSearchSharp />
        </button>
      </form>
      {search.length >= 3 && filteredConversations.length > 0 && (
        <ul className='mt-4 max-h-60 overflow-y-auto'>
          {filteredConversations.map((conversation) => (
            <li 
              key={conversation.id} 
              onClick={() => handleSelectConversation(conversation)}
              className={`text-gray-950 cursor-pointer hover:bg-purple-600 p-2 ${
                selectedConversation?.id === conversation.id ? 'bg-purple-400' : ''
              }`}
              ref={selectedConversation?.id === conversation.id ? selectedRef : null}
            >
              {conversation.fullname}
            </li>
          ))}
        </ul>
      )}
      {search.length >= 3 && filteredConversations.length === 0 && (
        <p className='mt-4 text-red-500'>No conversations found</p>
      )}
    </div>
  );
};

export default SearchInput;