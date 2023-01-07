import React, {useState} from 'react'

function AddNewTransactions(props) {
  const {onSubmitHandler} = props;
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

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
    setText('');
    setAmount('');
    onSubmitHandler(text, amount)
  }

  return (
        <div className='new-txn-container'>
          <h3 className='col-h3'>Add New Transactions</h3>
          <hr className='horizontal-line' />
          <form className='new-txn-form' onSubmit={handleSubmit}>
            <label className='label'>Text</label>
            <input 
              className='input-field'
              type='text'
              placeholder='Enter text'
              value={text}
              onChange={handleTextChange}
            />
            <label className='label'>
              <div className='amount'>
                <p className='p'>Amount</p>
                <p className='p'>(negative-expense, positive-income)</p>
              </div>
            </label>
            <input 
              className='input-field'
              type='number'
              placeholder='Enter Amount'
              value={amount}
              onChange={handleAmountChange}
            />
            <button className='add-txn-button' type='submit'>Add Transaction</button>
          </form>
        </div>
  )
}

export default AddNewTransactions