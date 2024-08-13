import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
import { TransactionInfo } from './Common';

type TransactionContextData = {
  balance: number
  transactions: Array<any>
  addTransaction: (amount: string,account: any) => void
}

const defaultContext: TransactionContextData =  {
  balance: 0,
  transactions: [],
  addTransaction: (amount: string,account: any) => {}
}

const TransactionContext = React.createContext<TransactionContextData>(defaultContext);

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }:PropsWithChildren) => {
  const [transactions, setTransactions] = useState<TransactionInfo []>([]);
  const [balance, setBalance] = useState(1000);

  const addTransaction = (amount: string , account: any) => {
    const newTransaction = { id: Date.now(), amount: parseFloat(amount), account };
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setBalance((prevBalance) => prevBalance - parseFloat(amount));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, balance }}>
      {children}
    </TransactionContext.Provider>
  );
};