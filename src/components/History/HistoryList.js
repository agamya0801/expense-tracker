import React, {useEffect} from 'react'
import './History.css'

function HistoryList(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    
    const {text, amount, sign, strip_color} = props;  
    return (
        <div className='list-items-content'>
            <p className='item-text'>{text}</p>
            <div className='amount-and-strip'>
                <p className='item-amount'>{`${sign} \u20B9${amount}`}</p>
                <div className={`strip ${strip_color}`} />
            </div>
        </div>
    )
}

export default HistoryList