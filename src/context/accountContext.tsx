import React from "react";
import { AccountContextType, Url, User } from "../types/appTypes";
import axios from 'axios';

export const AccountContext = React.createContext<AccountContextType | null>(null);

export const AccountProvider: React.FC<React.ReactNode> = ({ children }: any) => {
  const [user, setUser] = React.useState<AccountContextType["user"]>({
    id: "", token: "", role: "", expireIn: ""
  });
  const [account, setAccount] = React.useState<AccountContextType["account"]>([]);
  const [transaction, setTransaction] = React.useState<AccountContextType["transaction"]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getUserFromStorage: User = JSON.parse(localStorage.getItem('user') || '{}');
  setUser({
    id: getUserFromStorage.id,
    token: getUserFromStorage.token,
    role: getUserFromStorage.role,
    expireIn: getUserFromStorage.expireIn
  });

  const getAccount = async (url: Url) => {
    const response = await axios.get(`${url}/${user.id}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    setAccount(response.data);
    return response.data;
  }

  const createTransaction = async (url: Url, data: any) => {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    return response.data;
  }

  return (
    <AccountContext.Provider value={{ account, setAccount, transaction, setTransaction, user, setUser, isLoading, setIsLoading, getAccount }}>
      {children}
    </AccountContext.Provider>
  )
}


export default AccountProvider;
