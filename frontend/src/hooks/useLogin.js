import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const Login = async (username, password) => {
    setLoading(true);

    const success = handleInputErrors(username, password);
    if (!success) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      localStorage.setItem('chatAppUser', JSON.stringify(data));
      setAuthUser(data);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, Login };
};

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error('Please fill in all fields');
    return false;
  }
  
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters long');
    return false;
  }

  return true;
}

export default useLogin;
