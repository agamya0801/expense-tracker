import React from 'react'

function AddNewTransactions() {
  return (
    <div className='new-txn-container'>
      <h3 className='col-h3'>Add New Transactions</h3>
      <hr className='horizontal-line' />
      <form className='new-txn-form'>
        <label className='label'>Text</label>
        <input 
          className='input-field'
          type="text"
          placeholder='New text'
          required
        />
        <label className='label'>
          <div className='amount'>
            <p className='p'>Amount</p>
            <p className='p'>(negative-expense, positive-income)</p>
          </div>
        </label>
        <input 
          className='input-field'
          type="text"
          placeholder='Amount'
          required
        />
      </form>
      <button className='add-txn-button'>Add Transaction</button>
    </div>
  )
}

export default AddNewTransactions