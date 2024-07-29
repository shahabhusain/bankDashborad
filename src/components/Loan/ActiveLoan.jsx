import React from 'react'

const ActiveLoan = () => {
  return (
    <div className=' flex flex-col gap-4 mt-4'>
        <h1 className=' text-[22px] font-[600] text-[#333B69]'>Active Loans Overview</h1>
      <div className='bg-[#fff] py-6 px-5 rounded-xl flex items-center justify-between '>
        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>SL NO</li>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
          <li>06</li>
          <li>07</li>
          <li>08</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Loan Money</li>
          <li>$100,000</li>
          <li>$500,000</li>
          <li>$700,000</li>
          <li>$100,000</li>
          <li>$500,000</li>
          <li>$100,000</li>
          <li>$800,000</li>
          <li>$700,000</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Left to Repay</li>
          <li>$3445</li>
          <li>$5555</li>
          <li>$53442</li>
          <li>$33343</li>
          <li>$56667</li>
          <li>$56667</li>
          <li>$54567</li>
          <li>$23466</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Duration</li>
          <li>8 Months</li>
          <li>5 Months</li>
          <li>10 Months</li>
          <li>8 Months</li>
          <li>6 Months</li>
          <li>4 Months</li>
          <li>2 Months</li>
          <li>9 Months</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Intreste Rate</li>
          <li>12%</li>
          <li>6%</li>
          <li>17%</li>
          <li>9%</li>
          <li>30%</li>
          <li>20%</li>
          <li>10%</li>
          <li>12%</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Left to Repay</li>
          <li> $3445 / Month</li>
          <li> $5555 / Month</li>
          <li>$53442 / Month</li>
          <li>$33343 / Month</li>
          <li>$56667 / Month</li>
          <li>$56667 / Month</li>
          <li>$54567 / Month</li>
          <li>$23466 / Month</li>
        </ul>

        <ul className=' flex flex-col gap-8'>
          <li className=' text-[#718EBF] text-[16px] font-[500]'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
          <li className=' border-b-[1px] border-[#232323] hover:text-[#1814F3] cursor-pointer  px-5 rounded-md'>Repay</li>
        </ul>
      </div>
    </div>
  )
}

export default ActiveLoan