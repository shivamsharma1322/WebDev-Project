import React from 'react';
import Home from './Pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Pages/Courses';
import Signup from './Components/Signup';
import { Toaster } from "react-hot-toast";
import { useAuth } from './Context/AuthProvider';

function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={authUser?<Courses />:<Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} /> 
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App