import React from 'react'
import Header from '../components/Investment/Header'
import Carts from '../components/Investment/Carts'
import Yearly from '../components/Investment/Yearly'
import Monthly from '../components/Investment/Monthly'
import MyInvestMent from '../components/Investment/MyInvestMent'
import Trendind from '../components/Investment/Trendind'

const Investments = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div className=' w-[100%] flex gap-8 items-center justify-between'>
        <Yearly />
        <Monthly />
      </div>
       <div className=' w-[100%] gap-8 my-8 flex items-center justify-between'>
        <MyInvestMent />
        <Trendind />
       </div>
    </div>
  )
}

export default Investments