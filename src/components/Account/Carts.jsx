import React from 'react'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
const Carts = () => {
  return (
    <div className=' flex items-center justify-between mt-6'>
        <div className=' w-[20%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img1} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>My Balance</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>$12,750</h2>
            </div>
        </div>

        <div className=' w-[20%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img2} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>Income</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>$5,600</h2>
            </div>
        </div>

        <div className=' w-[20%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img3} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>Expense</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>$3,460</h2>
            </div>
        </div>

        <div className=' w-[20%] flex items-center gap-3 bg-white py-3 px-6 rounded-xl'>
            <img src={img4} alt="" />
            <div>
                <h1 className=' font-normal text-[16px] text-[#718EBF]'>TotalSaving</h1>
                <h2 className=' text-[25px] font-[600] text-[#232323]'>$7,920</h2>
            </div>
        </div>
    </div>
  )
}

export default Carts