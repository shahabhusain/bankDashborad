import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
const CardSetting = () => {
  return (
       <div className=' flex flex-col gap-3 w-[30%]'>
            <h1 className=' text-[22px] font-[500]'>Recent Transection</h1>
               <div className='flex flex-col gap-4 bg-white py-2 px-5 rounded-xl'>

             <div className=' flex items-center gap-3'>
               <img src={img1} alt="" />
              <div>
                <h1>Deposit from my Card</h1>
                <h2 className=' text-[#718EBF]'>28 January 2021</h2>
              </div>
            </div>


               <div className=' flex items-center gap-3'>
                 <img src={img2} alt="" />
              <div>
                <h1>Deposit Paypal</h1>
                <h2 className=' text-[#718EBF]'>25 January 2021</h2>
              </div>
               </div>

               <div className=' flex items-center gap-3'>
                 <img src={img1} alt="" />
              <div>
                <h1>Deposit Paypal</h1>
                <h2 className=' text-[#718EBF]'>25 January 2021</h2>
              </div>
               </div>

               
  
        
               <div className=' flex items-center gap-3'>
                <img src={img3} alt="" />
              <div>
                <h1>Jemi Wilson</h1>
                <h2 className=' text-[#718EBF]'>21 January 2021</h2>
              </div>
               </div>
        </div>
          </div>
  )
}

export default CardSetting