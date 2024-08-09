import React from 'react'
import {BiLogOut} from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
        <button className='btn btn-sm btn-primary'>Logout <BiLogOut /></button>
    </div>
  )
}

export default LogoutButton