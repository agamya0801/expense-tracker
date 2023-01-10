import React from 'react'
import { assignSign, assignStripColor, concatenateText } from '../../functions';
import './History.css'

function History(props) {
  const {transactions} = props;


  return (
    <div className='history-container'>
        <p className='history-title'>History</p>
        <hr className='horizontal-line'/>
        <div className='list'>
          {transactions.map((element) => {
            const sign = assignSign(element.amount);
            const strip_color = assignStripColor(element.amount);
            const newAmount = element.amount < 0 ? element.amount.slice(1) : element.amount;
            const newText = concatenateText(element.text);
            return <div className='list-items'>
              <div className='list-items-content'>
                <p className='item-text'>{newText}</p>
                <div className='amount-and-strip'>
                  <p className='item-amount'>{`${sign} \u20B9${newAmount}`}</p>
                  <div className={`strip ${strip_color}`} />
                </div>
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default History