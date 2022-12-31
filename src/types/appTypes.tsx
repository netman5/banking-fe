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
  createdAt: string;
  updatedAt: string;
}

export type sideLinksType = {
  icons: JSX.Element;
  link: string;
  text: string;
}[]

export type registeredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  role: string;
}

export type updateUserType = {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone_number: string;
}


export type AccountContextType = {
  account: account;
  setAccount: React.Dispatch<React.SetStateAction<account>>;
  transaction: transaction;
  setTransaction: React.Dispatch<React.SetStateAction<transaction>>;
  accountDetail: account;
  setAccountDetail: React.Dispatch<React.SetStateAction<account>>;
  transactions: transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<transaction[]>>;
  registeredUsers: registeredUser[];
  setRegisteredUsers: React.Dispatch<React.SetStateAction<registeredUser[]>>;


  // login: (data: loginData) => Promise<void>;
  // signup: (data: signupData) => Promise<void>;
  // logout: () => void;
  // createAccount: (data: accountData) => Promise<void>;
  getAccount: (url: string, id: string, token: string) => Promise<any>;
  createTransaction: (url: string, data: createTransactionData, token: string) => Promise<any>;
  getAllAccounts: (url: string, token: string) => Promise<any>;
  getAllUsers: (url: string, token: string) => Promise<registeredUser[]>;
  updateUser: (id: string, url: string, data: updateUserType, token: string) => Promise<updateUserType>;
  deleteAUser: (url: string, id: string, token: string) => Promise<any>;
}

