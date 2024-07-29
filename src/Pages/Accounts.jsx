import React from 'react'
import Header from '../components/Account/Header'
import Carts from '../components/Account/Carts'
import LastTrasaction from '../components/Account/LastTrasaction'
import MyCard from '../components/Account/MyCard'
import Debit from '../components/Account/Debit'
import InVoices from '../components/Account/InVoices'

const Accounts = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div className='w-[100%] gap-8 flex items-center justify-between mt-6'>
        <LastTrasaction />
        <MyCard />
      </div>
      <div className=' w-[100%] flex items-center justify-between mt-8 gap-8'>
        <Debit />
        <InVoices/>
      </div>
    </div>
  )
}

export default Accounts