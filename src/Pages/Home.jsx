import React from 'react'
import Header from '../components/home/Header'
import Cards from '../components/home/Cards'
import Weekly from '../components/home/Weekly'
import Expense from '../components/home/Expense'
import Transfer from '../components/home/Transfer'
import Belance from '../components/home/Belance'
const Home = () => {
  return (
    <div>
        <Header />
        <Cards />
         <div className=' w-[100%] flex items-center justify-between mt-6'>
         <Weekly />
         <Expense />
         </div>
         <div className=' flex mt-[42px] mb-12 gap-7 justify-between w-[100%] '>
          <Transfer />
          <Belance />
         </div>
    </div>
  )
}

export default Home