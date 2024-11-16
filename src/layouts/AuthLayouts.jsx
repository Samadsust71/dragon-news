import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayouts = () => {
  return (
    <div className='bg-[#E7E7E7] font-poppins'>
      <header className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayouts
