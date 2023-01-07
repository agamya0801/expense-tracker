import React from 'react'

function Balance(props) {
  const {transactions} = props;

  let netBalance = 0.00;

  // Traversing the transactions array and calculating the net balance
  transactions.forEach((element) => {
    netBalance = (parseFloat(netBalance) + parseFloat(element.amount)).toFixed(2);
  });

  return (
    <>
        <p className='p'>YOUR BALANCE</p>
        <h1 className='rem-balance'>${netBalance}</h1>
    </>
  )
}

export default Balance