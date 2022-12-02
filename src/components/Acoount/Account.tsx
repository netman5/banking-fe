import React from 'react'
import { User } from '../../types/appTypes';
import Styles from './Account.module.css'

const Account = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const { id } = user;
  console.log(id)
  return (
    <div className={Styles.container}>
      <div className={Styles.spending}>
        <h1>Welcome to Ficti Bank, Ola!</h1>
        <div>
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
        balance: $100
        <div>
          <h3>Information</h3>
          <div>
            <span>status: Active</span>
            <span>Account Type: Current</span>
            <span>Account Number: 123456789</span>
            Currency: USD
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account