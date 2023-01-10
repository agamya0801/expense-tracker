import React from 'react';

function IncomeExpense(props) {
  const {transactions} = props;
  let netIncome = '0.00';
  let netExpense = '0.00';

  // Traversing the transactions array for calculating netIncome and netExpense
  transactions.forEach((element) => {
    if(element.amount >= 0){
      netIncome = (parseFloat(netIncome)+parseFloat(element.amount)).toFixed(2);
    } 
    else{
      netExpense = (parseFloat(netExpense) - parseFloat(element.amount)).toFixed(2);
    }
  });

  // console.log({netIncome, netExpense});

  return (
    <div className='income-expense-card'>
      <div className='income-expense-card-col1'>
          <h3 className='col-h3'>INCOME</h3>
          <h3 className='col-h3' style={{color:'green'}}>{`\u20B9${netIncome}`}</h3>
      </div>
      <div className="vl"></div>
      <div className='income-expense-card-col2'>
          <h3 className='col-h3'>EXPENSE</h3>
          <h3 className='col-h3' style={{color:'red'}}>{`\u20B9${netExpense}`}</h3>
      </div>
    </div>
  )
}

export default IncomeExpense