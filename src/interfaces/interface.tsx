export interface Account {
  id: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  userId: string;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  accountId: string;
}

export interface DashboardProps {
  children: React.ReactNode;
}

export interface AccountsProps {
  children?: React.ReactNode;
}