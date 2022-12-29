import React from "react";
import { AccountContextType, createTransactionData, account, transaction } from "../types/appTypes";
import axios from 'axios';

export const AccountContext = React.createContext<AccountContextType | null>(null);

interface AccountProviderProps {
  children: React.ReactNode;
}
export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [account, setAccount] = React.useState<account>({} as account);
  const [transaction, setTransaction] = React.useState<transaction>({} as transaction);
  const [accountDetail, setAccountDetail] = React.useState<account>({} as account);
  const [transactions, setTransactions] = React.useState<transaction[]>([]);

  const createTransaction = async (url: string, data: createTransactionData, token: string) => {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }

  const getAccount = async (url: string, id: string, token: string) => {
    const response = await axios.get(`${url}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;

  }

  const getAllAccounts = async (url: string, token: string) => {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }


  return <AccountContext.Provider value={{ getAccount, createTransaction, account, setAccount, transaction, setTransaction, getAllAccounts, accountDetail, setAccountDetail, transactions, setTransactions }}>
    {children}
  </AccountContext.Provider>

}

export default AccountProvider;
