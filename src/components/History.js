import React from 'react'

function History(props) {
  const {transactions} = props;


  return (
    <div className='history-container'>
        <h3 className='header'>History</h3>
        <hr/>
        <div className='history-parent'>
          {transactions.map((element) => {
            const sign = element.amount >= 0 ? '+' : '';
            const strip_color = element.amount >= 0 ? "positive" : "negative";
            return <div className='history-list-items'>
              <div className='history-list-items-content'>
                <p>{element.text}</p>
                <div className='end-part'>
                  <p>{`${sign}${element.amount}`}</p>
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