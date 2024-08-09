import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        <span className='text-purple-400'>Lets Chat</span> <br />
        Sign Up
        </h1>
        <form action="">
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='John Doe' className='input input-bordered w-full max-w-xs h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='john_doe' className='input input-bordered w-full max-w-xs h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="text" placeholder='********' className='input input-bordered w-full max-w-xs h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder='********' className='input input-bordered w-full max-w-xs h-10' />
            </div>

        <GenderCheckbox/>
        
            <a href="#" className="text-sm hover:text-purple-700 hover:underline mt-2 inline-block">
                Already have an account? Sign in here.
            </a>
            <div>
                <button className='btn btn-sm btn-primary w-full mt-2'>Sign Up</button>
            </div>
        </form>
        </div>
        

    </div>
  )
}

export default SignUp