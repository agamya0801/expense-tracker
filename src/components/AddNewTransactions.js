import React, { useState } from 'react'

function AddNewTransactions() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleTextChange = (event) => {
    console.log(event);
    setText(event.target.value);
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleSubmit = event => {
    const isPositive = amount[0] === '-' ? false : true
    const printable_amt = Boolean(isPositive) ? amount : amount.substring(1);
    Boolean(isPositive) ? alert(`Recieved ${printable_amt}`) : alert(`Deducted ${printable_amt}`)
    event.preventDefault();
    setText('');
    setAmount('');
  }

  return (
    <div className='new-txn-container'>
      <h3 className='header'>Add New Transactions</h3>
      <hr className='horizontal-line' />
      <form className='new-txn-form' onSubmit={handleSubmit}>
        <label className='label'>Text</label>
        <input 
          className='input-field'
          name='text_input'
          type="text"
          placeholder='Enter text'
          onChange={handleTextChange}
          value={text}
        />
        <label className='label'>
          <div className='amount'>
            <p className='p'>Amount</p>
            <p className='p'>(negative-expense, positive-income)</p>
          </div>
        </label>
        <input 
          className='input-field'
          name='amount_input'
          type="text"
          placeholder='0.00'
          onChange={handleAmountChange}
          value={amount}
        />
        <button className='add-txn-button' type='submit'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddNewTransactions