import React from 'react'

function History(props) {
  const {transactions} = props;


  return (
    <div className='history-container'>
        <h3 className='header'>History</h3>
        <hr/>
        <div className='history-parent'>
          {transactions.map((element) => {
            const sign = element.amount >= 0 ? '+' : '-';
            const strip_color = element.amount >= 0 ? "positive" : "negative";
            const newAmount = element.amount < 0 ? element.amount.slice(1) : element.amount;
            const newText = element.text.length > 25 ? (element.text.substring(0, 25)).concat('...') : element.text;
            return <div className='history-list-items'>
              <div className='history-list-items-content'>
                <p>{newText}</p>
                <div className='end-part'>
                  <p>{`${sign} \u20B9${newAmount}`}</p>
                  <div className={`history-end-strip ${strip_color}`} />
                </div>
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default History