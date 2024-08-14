import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';
import {BeneficiaryInfo, TransactionInfo} from './Common';

type TransactionContextData = {
  balance: number;
  transactions: Array<any>;
  addTransaction: (amount: string, account: any) => void;
  beneficiaryList: Array<BeneficiaryInfo>;
  addBeneficiary: (value: BeneficiaryInfo) => void;
};

const defaultContext: TransactionContextData = {
  balance: 0,
  transactions: [],
  addTransaction: (amount: string, account: any) => {},
  beneficiaryList: [],
  addBeneficiary: _ => {},
};

const TransactionContext =
  React.createContext<TransactionContextData>(defaultContext);

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({children}: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<TransactionInfo[]>([]);
  const [balance, setBalance] = useState(1000);
  const [beneficiaryList, setBeneficiaryList] = React.useState<
    Array<BeneficiaryInfo>
  >([]);

  const addTransaction = (amount: string, account: any) => {
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      account,
    };
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setBalance(prevBalance => prevBalance - parseFloat(amount));
  };

  const addBeneficiary = (value: BeneficiaryInfo) => {
    setBeneficiaryList(prevBen => [...prevBen, value]);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        balance,
        beneficiaryList,
        addBeneficiary,
      }}>
      {children}
    </TransactionContext.Provider>
  );
};
