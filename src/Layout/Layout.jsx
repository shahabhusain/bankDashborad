import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex gap-6 w-[100%]'>
        <div className=' w-[20%] bg-white'>
        <SideBar />
        </div>
         <div className=' w-[80%] mx-4 mt-4'>
         <Outlet />
         </div>
    </div>
  )
}

export default Layout