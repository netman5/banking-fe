import React, { useState, useEffect } from 'react'
import { account, User } from '../../types/appTypes';
import { getAccountById } from '../../utils';
import CreateTransactionButton from '../Buttons/Button';
import Styles from './Account.module.css'
import AccountInfo from './AccountInfo';
import MasterCard from './Card';

const Account = () => {
  const [account, setAccount] = useState<account>();
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const { id, token } = user;
  const url = process.env.REACT_APP_API_URL + '/accounts';

  useEffect(() => {
    const userAccount = async () => {
      const account = await getAccountById(id, url, token);
      setAccount(account);
    }
    userAccount();
  }, [id, token, url])

  if (!account) {
    return <div>Loading...</div>
  }

  const { name, balance, accountNumber } = account;

  return (
    <div className={Styles.container}>
      <div className={Styles.spending}>
        <h1>{`Welcome ${name}!`}</h1>
        <div className={Styles.spendingBox}>
          <div>
            <h2>Expenses by categories</h2>
          </div>

          <div>
            <h2>Transactions</h2>
          </div>
        </div>
      </div>
      <div className={Styles.account}>
        <h2>Account</h2>
        <MasterCard name={name} />
        <p>Account balance: ${`${balance}`}</p>
        <div>
          <h3>Information</h3>
          <AccountInfo accountNumber={accountNumber} />
          <div>
            <CreateTransactionButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account