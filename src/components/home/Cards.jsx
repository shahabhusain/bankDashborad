import React from 'react'
import sim from '../../assets/sim.png'
import sim1 from '../../assets/sim1.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
const Cards = () => {
  return (
    <div className=' flex items-center justify-between mr-6 mt-8'>
      {/* cart1 */}
         <div className=' flex flex-col gap-3  w-[30%]'>
          <h1 className=' text-[22px] font-[500]'>My Cards</h1>
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
       <div className=' mt-10 relative w-[30%]'>
        <h1 className=' text-[17px] font-[500] absolute top-[-35px] right-3'>Sell all</h1>
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
      {/* cart2 */}
        {/* cart3 */}
          <div className=' flex flex-col gap-3 w-[30%]'>
            <h1 className=' text-[22px] font-[500]'>Recent Transection</h1>
               <div className='flex flex-col gap-3 bg-white py-2 px-5 rounded-xl'>
           <div className=' flex items-center justify-between'>
             <div className=' flex items-center gap-3'>
               <img src={img1} alt="" />
              <div>
                <h1>Deposit from my Card</h1>
                <h2 className=' text-[#718EBF]'>28 January 2021</h2>
              </div>
             </div>
              <h1 className=' text-[#FF4B4A]'>-$850</h1>
            </div>
             <div className=' flex items-center justify-between'>
               <div className=' flex items-center gap-3'>
                 <img src={img2} alt="" />
              <div>
                <h1>Deposit Paypal</h1>
                <h2 className=' text-[#718EBF]'>25 January 2021</h2>
              </div>
               </div>
              <h1 className=' text-[#41D4A8]'>+$2,500</h1>
            </div>
             <div className=' flex items-center justify-between'>
               <div className=' flex items-center gap-3'>
                <img src={img3} alt="" />
              <div>
                <h1>Jemi Wilson</h1>
                <h2 className=' text-[#718EBF]'>21 January 2021</h2>
              </div>
               </div>
              <h1 className=' text-[#41D4A8]'>-$2150</h1>
            </div>
        </div>
          </div>
      {/* cart3 */}
    </div>
  )
}

export default Cards