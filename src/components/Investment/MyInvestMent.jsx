import React from 'react'
import img1 from '../../assets/apple.png'
import img2 from '../../assets/google.png'
import img3 from '../../assets/tesla.png'
const MyInvestMent = () => {
  return (
    <div className=' w-[60%] flex flex-col gap-4'>
     <div className=' bg-white py-3 px-5 rounded-xl flex items-center justify-between'>
     <div className=' flex items-center gap-3'>
        <img src={img1} alt="" />
        <div>
          <h1 className=' text-[16px] font-[500] text-[#232323]'>Apple Store</h1>
           <p className=' text-[15px] font-[400] text-[#718EBF]'>E-commerce, Marketplace</p>
        </div>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#232323]'>$54,000</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Envestment Value</p>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#16DBAA]'>+16%</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Return Value</p>
      </div>
     </div>


     <div className=' bg-white py-3 px-5 rounded-xl flex items-center justify-between'>
     <div className=' flex items-center gap-3'>
        <img src={img2} alt="" />
        <div>
          <h1 className=' text-[16px] font-[500] text-[#232323]'>Apple Store</h1>
           <p className=' text-[15px] font-[400] text-[#718EBF]'>E-commerce, Marketplace</p>
        </div>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#232323]'>$54,000</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Envestment Value</p>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#16DBAA]'>+16%</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Return Value</p>
      </div>
     </div>


     <div className=' bg-white py-3 px-5 rounded-xl flex items-center justify-between'>
     <div className=' flex items-center gap-3'>
        <img src={img3} alt="" />
        <div>
          <h1 className=' text-[16px] font-[500] text-[#232323]'>Apple Store</h1>
           <p className=' text-[15px] font-[400] text-[#718EBF]'>E-commerce, Marketplace</p>
        </div>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#232323]'>$54,000</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Envestment Value</p>
      </div>
      <div>
        <h1 className=' text-[16px] font-[500] text-[#16DBAA]'>+16%</h1>
        <p className=' text-[15px] font-[400] text-[#718EBF]'>Return Value</p>
      </div>
     </div>

    </div>
  )
}

export default MyInvestMent