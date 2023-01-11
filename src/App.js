import {useState, useEffect} from 'react'
import './App.css';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import History from './components/History/History';
import AddNewTransactions from './components/AddNewTransactions/AddNewTransactions';

function App() {
  // Local storage used for storing the transactions using the useEffect Hook
  const [txn, setTxn] = useState(JSON.parse(window.localStorage.getItem('storedTxn')) || [{text: "", amount: "0"}])

  useEffect(() => {
    window.localStorage.setItem('storedTxn', JSON.stringify(txn));
  })
  
  // State management for transactions
  const addTxn = (text, amount) => {
    const prevState = [...txn];
    prevState.unshift({text, amount});
    setTxn(prevState);
  }

  return (
    <div className='main-container'>
      <Header />
      <Balance transactions={txn}/>
      <IncomeExpense transactions={txn}/>
      <History transactions={txn}/>
      <AddNewTransactions onSubmitHandler={addTxn}/>
    </div>
  );
}

export default App;
