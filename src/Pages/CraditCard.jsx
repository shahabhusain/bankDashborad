import React from 'react'
import Header from '../components/CraditCart/Header'
import Carts from '../components/CraditCart/Carts'
import Expense from '../components/CraditCart/Expense'
import CardList from '../components/CraditCart/CardList'
import AddNewCard from '../components/CraditCart/AddNewCard'
import CardSetting from '../components/CraditCart/CardSetting'

const CraditCard = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div className=' w-[100%] gap-8 flex items-center justify-between'>
        <Expense />
        <CardList />
      </div>

      <div className=' w-[100%] flex gap-8 pb-12 items-center justify-between'>
        <AddNewCard />
        <CardSetting />
      </div>
    </div>
  )
}

export default CraditCard