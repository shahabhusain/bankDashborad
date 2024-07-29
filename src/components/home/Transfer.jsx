import React from 'react'
import ava1 from '../../assets/ava1.png'
import ava2 from '../../assets/ava2.png'
import ava3 from '../../assets/ava3.png'
import { BsSendArrowUp } from "react-icons/bs";
const Transfer = () => {
  return (
    
      <div className=' w-[40%]  bg-white py-3 px-5 rounded-xl'>
        <h1 className=' text-[#343C6A] text-[22px] font-[500] pb-3'>Quick Transfer</h1>
      <div className=' flex items-center justify-between mt-5 '>
      <div className=' flex flex-col gap-1 items-center'>
        <img src={ava1} alt="" />
        <div className=' text-center'>
        <h1 className=' text-[17px] font-[600]'>Livia Bator</h1>
        <h2 className='text-[#718EBF]'>CEO</h2>
        </div>
      </div>
      <div className=' flex flex-col gap-1 items-center'>
        <img src={ava2} alt="" />
        <div className=' text-center'>
        <h1 className=' text-[17px] font-[600]'>Livia Bator</h1>
        <h2 className='text-[#718EBF]'>CEO</h2>
        </div>
      </div>
      <div className=' flex flex-col gap-1 items-center'>
        <img src={ava3} alt="" />
        <div className=' text-center'>
        <h1 className=' text-[17px] font-[600]'>Livia Bator</h1>
        <h2 className='text-[#718EBF]'>CEO</h2>
        </div>
      </div>
      </div>
      <div className=' flex items-center justify-between mt-6'>
        <h1 className=' text-[16px] text-[#718EBF]'>Write Amount</h1>
        <span className=' flex'><input className=' bg-[#EDF1F7] py-2 rounded-l-full focus:border-none focus:outline-none px-3' type="text" /> <button className=' flex items-center gap-3 bg-[#1814F3] text-white py-2 px-4 rounded-r-full'>Send <span><BsSendArrowUp /></span></button></span>
      </div>
    </div>
  )
}

export default Transfer