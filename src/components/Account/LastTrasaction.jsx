import React from 'react'
import img1 from '../../assets/a1.png'
import img2 from '../../assets/a2.png'
import img3 from '../../assets/a3.png'
const LastTrasaction = () => {
  return (
 <div className='w-[60%]'>
    <h1 className=' text-[#333B69] text-[22px] font-[600]'>Last Transaction</h1>
      <div className='  bg-white py-6 px-5 rounded-xl  flex flex-col gap-3 mt-3'>
     <div className=' flex items-center justify-between  '>
        <div className=' flex items-center gap-3'>
            <img src={img1} alt="" />
            <div>
                <h1 className=' text-[16px] font-[500] text-[#232323]'>Spotify Subscription</h1>
                <h2 className=' text-[15px] font-[400] text-[#718EBF] '>25 Jan 2021</h2>
            </div>
        </div>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Shopping</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>1234 ****</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Pending</h1>
        <h1 className=' text-[16px] font-[500] text-[#FE5C73]'>-$150</h1>
    </div>

    <div className=' flex items-center justify-between   '>
        <div className=' flex items-center gap-3'>
            <img src={img2} alt="" />
            <div>
                <h1 className=' text-[16px] font-[500] text-[#232323]'>Spotify Subscription</h1>
                <h2 className=' text-[15px] font-[400] text-[#718EBF] '>25 Jan 2021</h2>
            </div>
        </div>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Shopping</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>1234 ****</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Pending</h1>
        <h1 className=' text-[16px] font-[500] text-[#FE5C73]'>-$150</h1>
    </div>

    <div className=' flex items-center justify-between  '>
        <div className=' flex items-center gap-3'>
            <img src={img3} alt="" />
            <div>
                <h1 className=' text-[16px] font-[500] text-[#232323]'>Spotify Subscription</h1>
                <h2 className=' text-[15px] font-[400] text-[#718EBF] '>25 Jan 2021</h2>
            </div>
        </div>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Shopping</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>1234 ****</h1>
        <h1 className=' text-[16px] font-[400] text-[#718EBF]'>Pending</h1>
        <h1 className=' text-[16px] font-[500] text-[#FE5C73]'>-$150</h1>
    </div>
   </div>
 </div>
  )
}

export default LastTrasaction 