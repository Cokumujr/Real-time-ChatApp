import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full gap-2">
          <input 
            type="text" 
            placeholder='Send a message...' 
            className='border rounded-lg block w-full p-2.5 bg-slate-700 border-slate-600 text-white text-sm'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type='submit' 
            className='flex-shrink-0 bg-slate-600 text-white rounded-lg p-2'
          >
            <BsSend />
          </button>
        </div>
        
        {loading && (
          <div className='text-center mt-2'>
            <span className='loading loading-spinner loading-lg'></span>
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
