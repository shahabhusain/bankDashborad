import React from 'react'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
const Carts = () => {
  return (
    <div className=' flex items-center justify-between mt-6'>
        <div className=' w-[30%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img1} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>Total Invested Amount</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>$150,000</h2>
            </div>
        </div>

        <div className=' w-[30%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img2} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>Number of Investments</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>1,250</h2>
            </div>
        </div>

        <div className=' w-[30%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img3} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>Rate of Return</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>+5.80%</h2>
            </div>
        </div>
    </div>
  )
}

export default Carts