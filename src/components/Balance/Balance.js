import React from 'react'
import { checkRounded, concatBalanceAmountWithK, truncateAmount, assignSign } from '../../functions';
import './Balance.css'

function Balance(props) {
  const {transactions} = props;

  let netBalance = '0.00';

  // Traversing the transactions array and calculating the net balance
  transactions.forEach((element) => {
    netBalance = (parseFloat(netBalance) + parseFloat(element.amount)).toFixed(2);
  });

  const sign = assignSign(netBalance);
  const isRounded = checkRounded(netBalance);
  const color = parseFloat(netBalance) >= 0 ? "positive-text" : "negative-text"
  netBalance = truncateAmount(parseFloat(netBalance));
  netBalance = concatBalanceAmountWithK({netBalance, isRounded});
  netBalance = parseFloat(netBalance) < 0 ? netBalance.toString().slice(1) : netBalance;

  return (
    <div className='balance-container'>
      <p className='balance-title'>YOUR BALANCE</p>
      <p className={`balance-amount ${color}`}>{`${sign} \u20b9${netBalance}`}</p>
    </div>
  )
}

export default Balance

