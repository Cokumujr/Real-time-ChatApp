import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversations from '../../zustand/useConversations';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversations();
  const { conversations} = useGetConversations();




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }
    const filteredConversations = conversations.filter((conversation) => conversation.fullname.toLowerCase().includes(search.toLowerCase()));

    if (filteredConversations){
      setSelectedConversation(filteredConversations[0]);
    setSearch("");
    toast.success('Conversation selected');
    e.target.reset();
    }else {
      toast.error('No conversation found');
    }
    
  };


    return (
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
    );
  };

export default SearchInput