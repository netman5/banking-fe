import React, { useEffect } from 'react'
import { AccountContext } from '../../../context/accountContext';
import { account, AccountContextType, User } from '../../../types/appTypes';
import { getTransactionsByUserId } from '../../../utils';
import AccountsWrapper from '../AccountsWrapper';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [accounts, setAccounts] = React.useState<account[]>([]);
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const { getAllAccounts, setAccountDetail, setTransactions } = React.useContext(AccountContext) as AccountContextType;
  const url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const getAccounts = async () => {
      const response = await getAllAccounts(`${url}/accounts`, user.token);
      setAccounts(response);
    }
    getAccounts();
  }, [getAllAccounts, user.token, url, setAccounts])

  const viewAccountById = async (id: string) => {
    const account = accounts.find(account => account.id === id);
    const transactions = await getTransactionsByUserId(`${url}/transactions`, user.token, account?.userId)
    if (account && transactions) {
      navigate(`/accounts/${id}`);
      setTransactions(transactions);
      setAccountDetail(account);
    }
  }
  return (
    <AccountsWrapper>
      <div className='container'>
        <h1 className='display-4 text-center'>Customer Accounts</h1>
        <div>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Account Number</th>
                <th scope='col'>Balance</th>
                <th scope='col'>Type</th>
                <th scope='col'>Status</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={account.id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{account.name}</td>
                  <td>{account.accountNumber}</td>
                  <td>${account.balance}</td>
                  <td>Current</td>
                  <td>Active</td>
                  <td><button className='btn btn-secondary' onClick={() => viewAccountById(account.id)}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AccountsWrapper>
  )
}

export default AccountPage;