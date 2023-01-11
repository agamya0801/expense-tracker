import React from 'react';
import { checkRounded, concatPositiveAmountWithK,concatNegativeAmountWithK, truncateAmount } from '../../functions';
import './IncomeExpense.css';

function IncomeExpense(props) {
  const {transactions} = props;
  let netIncome = '0.00';
  let netExpense = '0.00';
  let isRounded = true;

  // Traversing the transactions array for calculating netIncome and netExpense
  transactions.forEach((element) => {
    if(element.amount >= 0){
      netIncome = (parseFloat(netIncome) + parseFloat(element.amount)).toFixed(2);
    } 
    else{
      netExpense = (parseFloat(netExpense) - parseFloat(element.amount)).toFixed(2);
    }
  });

  isRounded = checkRounded(netIncome);
  netIncome = truncateAmount(parseFloat(netIncome));
  netIncome = concatPositiveAmountWithK({netIncome, isRounded});

  isRounded = checkRounded(netExpense);
  netExpense = truncateAmount(parseFloat(netExpense));
  netExpense = concatNegativeAmountWithK({netExpense, isRounded});

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