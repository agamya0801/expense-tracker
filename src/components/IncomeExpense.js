import React from 'react'

function IncomeExpense() {
  return (
    <div className='income-expense-card'>
        <div className='income-expense-card-col1'>
            <h3 className='col-h3'>INCOME</h3>
            <h3 className='col-h3' style={{color:'green'}}>0.00</h3>
        </div>
        <div className='vl'></div>
        <div className='income-expense-card-col2'>
            <h3 className='col-h3'>EXPENSE</h3>
            <h3 className='col-h3' style={{color:'red'}}>0.00</h3>
        </div>
    </div>
  )
}

export default IncomeExpense