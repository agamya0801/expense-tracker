import React from 'react'
import './Balance.css'

function Balance(props) {
  const {transactions} = props;

  let netBalance = '0.00';
  let netBalanceString = '0.00';

  // Traversing the transactions array and calculating the net balance
  transactions.forEach((element) => {
    netBalance = (parseFloat(netBalance) + parseFloat(element.amount)).toFixed(2);
  });

  const isRounded = netBalance >= 10000000 ? true : false;
  netBalanceString = netBalance
  netBalanceString = netBalanceString >= 10000000 ? (netBalanceString/10000000).toFixed(2) : netBalanceString;
  netBalanceString = Boolean(isRounded) ? netBalanceString.toString()+'K': netBalanceString.toString();

  const color = parseFloat(netBalance) >= 0 ? "positive-text" : "negative-text"

  return (
    <div className='balance-container'>
      <p className='balance-title'>YOUR BALANCE</p>
      <p className={`balance-amount ${color}`}>{`\u20b9${netBalanceString}`}</p>
    </div>
  )
}

export default Balance

