import React from 'react';
import useLogout from '../../hooks/useLogout';
import { BiLogOut } from 'react-icons/bi';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
      <button 
        onClick={logout} 
        className='btn btn-sm btn-primary'
        disabled={loading}  
      >
        {loading ? (
          <>
            Logging out... <span className='loading loading-spinner'></span>
          </>
        ) : (
          <>
            Log Out <BiLogOut />
          </>
        )}
      </button>
    </div>
  );
}

export default LogoutButton;
