import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
      <form className='flex items-center gap-2'>
        <input 
          type="text" 
          placeholder='Search..' 
          className='input input-bordered rounded-full w-full'
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