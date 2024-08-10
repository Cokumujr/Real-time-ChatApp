import { useState } from 'react'
import { Link } from 'react-router-dom'
import  useLogin  from '../../hooks/useLogin'

const Login = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const {loading, Login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Login(username, password);
    }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
            <span className='text-purple-400'> ChatJyuce </span> <br />
                Login
               
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='input input-bordered w-full max-w-xs h-10' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='input input-bordered w-full max-w-xs h-10' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <Link to="/signup" className='text-sm hover:text-purple-700 hover:underline mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <button className='btn btn-sm btn-primary w-full mt-2' disabled={loading} >
                    {loading? "logging in" : "Login" }</button>
            </form>
        </div>
    </div>
  )
}

export default Login