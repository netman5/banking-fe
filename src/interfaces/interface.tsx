export interface User{
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Account{
  id: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  userId: string;
}

export interface Transaction{
  id: string;
  transactionType: string;
  amount: number;
  date: string;
  accountId: string;
}

export interface TransactionType{
  id: string;
  type: string;
}

export interface LocalStorageItem{
  id: string;
}