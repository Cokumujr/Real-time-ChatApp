import { BsSend } from "react-icons/bs"; 


const MessageInput = () => {
    return (
      <form className='px-4 my-3'>
        <div className="w-full relative">
        <input 
          type="text" 
          placeholder='Send a message...' 
          className='border rounded-lg block w-full p-2.5 bg-slate-700 border-slate-600 text-white text-sm'
        />
        <button 
          type='submit' 
          className=' flex-shrink-0 absolute inset-y-0 end-0 flex items-center pe-3'
        >
          <BsSend className=" " />
        </button>
        </div>
        
      </form>
    );
  };

export default MessageInput