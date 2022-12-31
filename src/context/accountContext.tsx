import React from "react";
import { AccountContextType, createTransactionData, account, transaction, registeredUser, updateUserType } from "../types/appTypes";
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
  const [registeredUsers, setRegisteredUsers] = React.useState<registeredUser[]>([]);

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

  const getAllUsers = async (url: string, token: string) => {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }

  const deleteAUser = async (url: string, id: string, token: string) => {
    const response = await axios.delete(`${url}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }

  const updateUser = async (id: string, url: string, data: updateUserType, token: string) => {
    const response = await axios.patch(`${url}/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }

  return <AccountContext.Provider value={{ getAccount, createTransaction, account, setAccount, transaction, setTransaction, getAllAccounts, accountDetail, setAccountDetail, transactions, setTransactions, registeredUsers, setRegisteredUsers, getAllUsers, deleteAUser, updateUser }}>
    {children}
  </AccountContext.Provider>

}

export default AccountProvider;
