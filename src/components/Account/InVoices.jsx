import React from 'react'
import img1 from '../../assets/a1.png'
import img2 from '../../assets/a2.png'
import img3 from '../../assets/a3.png'
const InVoices = () => {
  return (
    <div className=' flex flex-col gap-3 w-[35%]'>
       <div className='flex flex-col gap-3 bg-white py-6 px-5 rounded-xl'>
       <h1 className=' text-[22px] font-[500]'>Recent Transection</h1>
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
  )
}

export default InVoices