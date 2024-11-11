import React from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpense } from './component/IncomeExpense';
import { History } from './component/History';
import { TransactionList } from './component/TransactionList';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>

      <Header/>
      <div className = 'container'>
      <Balance />
      </div>
      <IncomeExpense/>
      <History/>
      <TransactionList/>
    </GlobalProvider>
  );
}

export default App;
