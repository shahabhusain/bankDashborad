import React from 'react'
import sim from '../../assets/sim.png'
import sim1 from '../../assets/sim1.png'
const Carts = () => {
  return (
    <div className=' flex items-center justify-between mt-8'>
      {/* cart1 */}
         <div className=' flex flex-col gap-3  w-[30%]'>
          
            <div className=' bg-[#4C49ED] py-3 px-5 rounded-xl text-white flex flex-col gap-4'>
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
      {/* cart1 */}
        {/* cart2 */}
        <div className=' flex flex-col gap-3  w-[30%]'>
          
            <div className=' bg-[#0A06F4] py-3 px-5 rounded-xl text-white flex flex-col gap-4'>
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
      {/* cart2 */}
        {/* cart3 */}
        <div className=' w-[30%]'>
          <div className=' bg-[#fff] py-3 px-5 rounded-xl text-[#343C6A] flex flex-col gap-4'>
        <div className=' flex items-center justify-between'>
        <div>
          <h4>Balance</h4>
          <h1 className=' text-[22px] font-medium'>$5,726</h1>
        </div>
         <img src={sim1} alt="" />
        </div>
        <div className=' flex items-center justify-between'>
          <div>
          <h1 className=' text-[718EBF]'>CARD HOLDER</h1>
          <h2 className=' text-[19px] font-[500]'>Eddy Consuma</h2>
          </div>
         <div>
         <h1 className=' text-[718EBF]'>VALID THRU</h1>
         <h2 className=' text-[19px] font-[500]'>12/12</h2>
         </div>
        </div>
        <div>
          <h1 className=' text-[22px] font-[500]'>3377 ************** 1234</h1>
        </div>
      </div>
       </div>
      {/* cart3 */}
    </div>
  )
}

export default Carts