import React, {useState} from 'react'

function AddNewTransactions() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const handleAmountChange = event => {
    setAmount(event.target.value)
  }

  const handleSubmit = () => {
    const isPositiveAmount = amount < 0 ? false : true;
    const printableAmount = Boolean(isPositiveAmount) ? amount : (-1 * amount);
    Boolean(isPositiveAmount) ? alert(`Recieved: ${printableAmount}`) : alert(`Deducted ${printableAmount}`);
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
          type='text'
          placeholder='Amount'
          value={amount}
          onChange={handleAmountChange}
        />
        <button className='add-txn-button' type='submit'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddNewTransactions