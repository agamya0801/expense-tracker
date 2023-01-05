import React, {useState} from 'react'

function IncomeExpense() {
  const [incomeAmount, setIncomeAmount] = useState('0.00');
  const [expenseAmount, setExpenseAmount] = useState('0.00');

  return (
    <div className='income-expense-card'>
        <div className='income-expense-card-col1'>
            <h3 className='col-h3'>INCOME</h3>
            <h3 className='col-h3' style={{color:'green'}}>{incomeAmount}</h3>
        </div>
        <div class="vl"></div>
        <div className='income-expense-card-col2'>
            <h3 className='col-h3'>EXPENSE</h3>
            <h3 className='col-h3' style={{color:'red'}}>{expenseAmount}</h3>
        </div>
    </div>
  )
}

export default IncomeExpense