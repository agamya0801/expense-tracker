import React from 'react'
import { checkSign, checkRounded, truncateAmount } from '../../utils/AmountUtils'
import './Balance.css'

function Balance(props) {
  const {transactions} = props;

  // Traversing the transactions array and calculating the net balance
  let netBalance = transactions.reduce((accumulator, element) => accumulator+parseFloat(element.amount), 0)

  const sign = checkSign(netBalance);
  const isRounded = checkRounded(netBalance);
  const color = parseFloat(netBalance) >= 0 ? "positive-text" : "negative-text"
  netBalance = truncateAmount(parseFloat(netBalance));
  netBalance = Boolean(isRounded) ? netBalance+'K' : netBalance;
  netBalance = parseFloat(netBalance) < 0 ? netBalance.toString().slice(1) : netBalance;

  return (
    <div className='balance-container'>
      <p className='balance-title'>YOUR BALANCE</p>
      <p className={`balance-amount ${color}`}>{`${sign} \u20b9${netBalance}`}</p>
    </div>
  )
}

export default Balance

