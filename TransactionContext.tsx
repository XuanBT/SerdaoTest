import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';
import {BeneficiaryInfo, TransactionInfo} from './Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const balanceData = balance - parseFloat(amount);
    const transactionList = [...transactions, newTransaction];
    setTransactions(transactionList);
    setBalance(balanceData);
    AsyncStorage.setItem('balance', balanceData.toString());
    AsyncStorage.setItem('transactionList', JSON.stringify(transactionList));
  };

  const addBeneficiary = (value: BeneficiaryInfo) => {
    const benArr = [...beneficiaryList, value];
    setBeneficiaryList(benArr);
    AsyncStorage.setItem('beneficiaryList', JSON.stringify(benArr));
  };

  React.useEffect(() => {
    AsyncStorage.getItem('beneficiaryList').then(benData => {
      if (benData) {
        const benList: Array<BeneficiaryInfo> = JSON.parse(benData);
        console.log('get ben data from AsyncStorage to parse ben List');
        setBeneficiaryList(benList);
      }
    });
    AsyncStorage.getItem('transactionList').then(transactionData => {
      if (transactionData) {
        const transacList: TransactionInfo[] = JSON.parse(transactionData);
        console.log(
          'get transaction data from AsyncStorage to parse transaction List',
        );
        setTransactions(transacList);
      }
    });
    AsyncStorage.getItem('balance').then(balanceData => {
      if (balanceData) {
        const balanceInfo: string = JSON.parse(balanceData);
        console.log('get balance Data from AsyncStorage');
        setBalance(Number(balanceInfo));
      }
    });
  }, []);

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
