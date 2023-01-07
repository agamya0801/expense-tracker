import {useState} from 'react'
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddNewTransactions from './components/AddNewTransactions';

function App() {
  // State management for transactions
  const [txn, setTxn] = useState([])

  const addTxn = (text, amount) => {
    const cloneTxn = [...txn];
    const isPositiveAmount = amount >= 0;
    cloneTxn.push({text, amount, isPositiveAmount});
    setTxn(cloneTxn);
  }

  return (
    <div className='main-container'>
      <Header />
      <Balance transactions={txn}/>
      <IncomeExpense transactions={txn}/>
      <History />
      <AddNewTransactions onSubmitHandler={addTxn}/>
    </div>
  );
}

export default App;
