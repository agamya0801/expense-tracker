import React from 'react'
import './History.css'

function History(props) {
  const {transactions} = props;


  return (
    <div className='history-container'>
        <p className='history-title'>History</p>
        <hr className='horizontal-line'/>
        <div className='list'>
          {transactions.map((element) => {
            const sign = element.amount >= 0 ? '+' : '-';
            const strip_color = element.amount >= 0 ? "positive" : "negative";
            const newAmount = element.amount < 0 ? element.amount.slice(1) : element.amount;
            const newText = element.text.length > 16 ? (element.text.substring(0, 16)).concat('...') : element.text;
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