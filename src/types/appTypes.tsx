export type LayoutProps = {
  children: React.ReactNode;
}

export type Url = {
  url: string;
}

export type User = {
  id: string;
  token: string;
  role: string;
  expireIn: string;
}

export type loginData = {
  email: string;
  password: string;
}


export type signupData = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

export type accountData = {
  name: string;
  userId: string;
  accountNumber: string;
}

export type account = {
  id: string;
  name: string;
  balance: number;
  userId: string;
  accountNumber: string;
}

export type createTransactionData = {
  amount: number;
  type: string;
  destinationAcctNumber: string;
}

export type transaction = {
  _id: string;
  userId: string[];
  amount: number;
  type: string;
  destinationAcctNumber: string;
}

export type AccountContextType = {
  account: account;
  setAccount: React.Dispatch<React.SetStateAction<account>>;
  transaction: transaction;
  setTransaction: React.Dispatch<React.SetStateAction<transaction>>;
  // isLoading: boolean;
  // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  // login: (data: loginData) => Promise<void>;
  // signup: (data: signupData) => Promise<void>;
  // logout: () => void;
  // createAccount: (data: accountData) => Promise<void>;
  getAccount: (url: string, id: string, token: string) => Promise<any>;
  // getTransactions: () => Promise<void>;
  createTransaction: (url: string, data: createTransactionData, token: string) => Promise<any>;
}

