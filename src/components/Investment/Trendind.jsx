import React from 'react'

const Trendind = () => {
  return (
    <div className='w-[40%]'>
      <div className='  bg-[#fff] py-6 px-5 rounded-xl flex items-center justify-between '>
        <ul className=' flex flex-col gap-4'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>SL NO</li>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>

        <ul className=' flex flex-col gap-4'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Name</li>
          <li>Trivago</li>
          <li>Canon</li>
          <li>Ubar food</li>
          <li>Nokia</li>
          <li>Tiktok</li>
        </ul>

        <ul className=' flex flex-col gap-4'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Price</li>
          <li>$344</li>
          <li>$55</li>
          <li>$532</li>
          <li>$343</li>
          <li>$567</li>
        </ul>

        <ul className=' flex flex-col gap-4'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Return</li>
          <li>-10%</li>
          <li>+10%</li>
          <li>-40%</li>
          <li>+80%</li>
          <li>-10%</li>
        </ul>
      </div>
    </div>
  )
}

export default Trendind