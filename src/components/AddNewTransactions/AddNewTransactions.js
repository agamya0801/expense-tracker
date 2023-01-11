import React, {useState} from 'react'
import './AddNewTransactions.css'

function AddNewTransactions(props) {
  const {onSubmitHandler} = props;
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  // const inputRef = useRef();

  // For Handling the changes in text field
  const handleTextChange = event => {
    setText(event.target.value)
  }

  // For handling the changes in the amount field
  const handleAmountChange = event => {
    setAmount(event.target.value)
  }

  // For handling the submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const refactoredText = text.charAt(0).toUpperCase() + text.slice(1);
    onSubmitHandler(refactoredText, amount)
    setText('');
    setAmount('');
  }

  return (
        <div className='new-txn-container'>
          <p className='new-txn-title'>Add New Transactions</p>
          <hr className='horizontal-line' />
          <form className='new-txn-form' onSubmit={handleSubmit}>
            <label className='label'>Text</label>
            <input 
              className='input-field'
              type='text'
              placeholder='Enter text'
              value={text}
              onChange={handleTextChange}
              required
              autoFocus
            />
            <label className='label'>
              <div className='amount'>
                <p className='amount-subheading'>Amount</p>
                <p className='amount-subheading'>(negative-expense, positive-income)</p>
              </div>
            </label>
            <input 
              className='input-field'
              type='number'
              placeholder='Enter Amount'
              value={amount}
              onChange={handleAmountChange}
              required
            />
            <button className='add-txn-button' type='submit'>Add Transaction</button>
          </form>
        </div>
  )
}

export default AddNewTransactions