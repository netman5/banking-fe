export type LayoutProps = {
  children: React.ReactNode;
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
