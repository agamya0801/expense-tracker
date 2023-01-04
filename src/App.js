import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddNewTransactions from './components/AddNewTransactions';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <AddNewTransactions />
    </div>
  );
}

export default App;
