import React from 'react';
import './IncomeExpense.css';

function IncomeExpense(props) {
  const {transactions} = props;
  let netIncome = '0.00';
  let netExpense = '0.00';

  // Traversing the transactions array for calculating netIncome and netExpense
  transactions.forEach((element) => {
    if(element.amount >= 0){
      netIncome = (parseFloat(netIncome)+parseFloat(element.amount)).toFixed(2);
      const isRounded = netIncome >= 10000000 ? true : false;
      netIncome = netIncome >= 10000000 ? (netIncome/10000000).toFixed(2) : netIncome;
      netIncome = Boolean(isRounded) ? netIncome.toString()+'K': netIncome.toString();
    } 
    else{
      netExpense = (parseFloat(netExpense) - parseFloat(element.amount)).toFixed(2);
      const isRounded = netExpense >= 10000000 ? true : false; 
      netExpense = netExpense >= 10000000 ? (netExpense/10000000).toFixed(2) : netExpense;
      netExpense = Boolean(isRounded) ? netExpense.toString()+'K': netExpense.toString();
    }
  });

  // console.log({netIncome, netExpense});

  return (
    <div className='income-expense-container'>
      <div className='income-container'>
          <p className='income-title'>INCOME</p>
          <p className='income-amount' style={{color:'green'}}>{`\u20B9${netIncome}`}</p>
      </div>
      <div className="vl"></div>
      <div className='expense-container'>
          <p className='expense-title'>EXPENSE</p>
          <p className='expense-amount' style={{color:'red'}}>{`\u20B9${netExpense}`}</p>
      </div>
    </div>
  )
}

export default IncomeExpense