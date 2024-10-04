import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = "https://e-commerce-project-mxdb.onrender.com"
export const currency = '$'

export default function App() {

  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ""
      ? <Login  setToken={setToken}  />
      : <>
      <Navbar setToken={setToken} />
      <hr />
      <div className='flex w-full'>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path='/add' element={<Add token={token} />}/>
          <Route path='/list' element={<List token={token} />}/>
          <Route path='/orders' element={<Orders token={token} />}/>
        </Routes>

        </div>
      </div>
      </>
    }
      

    </div>
  )
}
