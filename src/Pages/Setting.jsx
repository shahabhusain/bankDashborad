import React, { useState } from 'react'
import EditProfile from '../components/Settings/EditProfile'
import Preference from '../components/Settings/Preference'
import Security from '../components/Settings/Security'
import Header from '../components/Services/Header'

const Setting = () => {
  const [open, setOpen] = useState(1)
  return (
    <div>
      <Header />
      <div className='bg-white py-3 px-12 rounded-xl mt-8'>
      <div className=' flex items-center gap-8  '>
          <button className={`${open === 1 ? "border-b-[3px] rounded-sm border-[#1814F3] text-[#1814F3]" : " text-[#718EBF]"} font-[500] text-[16px]`} onClick={() => setOpen(1)}>Edit Profile</button>
          <button className={`${open === 2 ? "border-b-[3px] rounded-sm border-[#1814F3] text-[#1814F3]" : " text-[#718EBF]"} font-[500] text-[16px]`} onClick={() => setOpen(2)}>Prefrence</button>
          <button className={`${open === 3 ? "border-b-[3px] rounded-sm border-[#1814F3] text-[#1814F3]" : " text-[#718EBF]"} font-[500] text-[16px]`} onClick={() => setOpen(3)}>Security</button>
          </div>
        {
          open === 1 ? <><EditProfile /></> : <></>
        }

        {
          open === 2 ? <><Preference /></> : <></>
        }

        {
          open === 3 ? <><Security /></> : <></>
        }
          
      

      </div>
    </div>
  )
}

export default Setting