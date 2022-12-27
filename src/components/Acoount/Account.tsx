import React, { useEffect } from 'react'
import { AccountContext } from '../../context/accountContext';
import { AccountContextType, User } from '../../types/appTypes';
import CreateTransactionButton from '../Buttons/Button';
import Styles from './Account.module.css'
import AccountInfo from './AccountInfo';
import MasterCard from './Card';

const Account = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const { getAccount, account, setAccount } = React.useContext(AccountContext) as AccountContextType;
  const url = process.env.REACT_APP_API_URL + '/accounts';

  useEffect(() => {
    const userAccount = async () => {
      const response = await getAccount(url, user.id, user.token);
      setAccount(response);
    }
    userAccount();
  }, [url, setAccount, getAccount, user.id, user.token])

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