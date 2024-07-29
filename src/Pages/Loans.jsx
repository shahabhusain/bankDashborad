import React from 'react'
import Header from '../components/Loan/Header'
import Cards from '../components/Loan/Cards'
import ActiveLoan from '../components/Loan/ActiveLoan'

const Loans = () => {
  return (
    <div>
      <Header />
      <Cards />
      <ActiveLoan />
    </div>
  )
}

export default Loans