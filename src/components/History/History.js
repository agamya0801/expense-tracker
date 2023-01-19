import React from 'react'
import { checkSign } from '../../utils/AmountUtils';
import './History.css'
import HistoryList from './HistoryList';

function History(props) {
  const {transactions} = props;


  return (
    <div className='history-container'>
        <p className='history-title'>History</p>
        <hr className='horizontal-line'/>
          <div className='list'>
            {transactions.filter(element => element.text !== "" && element.amount !== '0')
            .map((element) => {
              const sign = checkSign(element.amount);
              const strip_color = element.amount >= 0 ? "positive" : "negative";
              const newAmount = element.amount < 0 ? element.amount.slice(1) : element.amount;
              const newText = element.text.length > 16 ? (element.text.substring(0, 16)).concat('...') : element.text;
              return <div className='list-items'>
                <HistoryList text={newText} amount={newAmount} sign={sign} strip_color={strip_color}/>
              </div>
            })}
          </div>
    </div>
  )
}

export default History