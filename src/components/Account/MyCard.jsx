import React from 'react'
import sim from '../../assets/sim.png'
const MyCard = () => {
  return (
         <div className=' flex flex-col gap-3  w-[40%]'>
          <h1 className=' text-[22px] font-[500]'>My Cards</h1>
            <div className=' bg-[#4C49ED] py-[1.9rem] px-5 rounded-xl text-white flex flex-col gap-4'>
        <div className=' flex items-center justify-between'>
        <div>
          <h4>Balance</h4>
          <h1 className=' text-[22px] font-medium'>$5,726</h1>
        </div>
         <img src={sim} alt="" />
        </div>
        <div className=' flex items-center justify-between'>
          <div>
          <h1 className=' text-[#d8d7d7]'>CARD HOLDER</h1>
          <h2 className=' text-[19px] font-[500]'>Eddy Consuma</h2>
          </div>
         <div>
         <h1 className=' text-[#d8d7d7]'>7</h1>
         <h2 className=' text-[19px] font-[500]'>12/12</h2>
         </div>
        </div>
        <div>
          <h1 className=' text-[22px] font-[500]'>3377 ************** 1234</h1>
        </div>
      </div>
         </div>
  )
}

export default MyCard