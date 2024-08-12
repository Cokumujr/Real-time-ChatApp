import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/toast.css'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'





function App() {
 const {authUser} = useAuthContext();
  return (
    <>
     <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: 'toast-custom',
          duration: 4000,
          iconTheme: {
            primary: '#8b5cf6',
            secondary: '#1f2937',
          },
        }}
      />

    <div className="p-4 h-screen flex justify-center items-center">
 <Routes>
   <Route path="/" element={ authUser ? <Home /> : <Navigate to={"/login"} />} />
   <Route path="/login" element={ authUser ? <Navigate to="/" /> : <Login />} />
   <Route path="/signup" element={ authUser ? <Navigate to="/" /> : <SignUp />} />
 </Routes>
   </div>
    </>
  )
}

export default App
