import React from 'react'
import { User } from '../../types/appTypes';
import Account from '../Acoount/Account'
import Accounts from '../admin/AccountsWrapper';
import styles from './Home.module.css'

const Home = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className={styles.container}>
      {user.role === 'admin' ? (
        <>
          <Accounts />
        </>
      ) : <Account />}
    </div>
  )
}

export default Home