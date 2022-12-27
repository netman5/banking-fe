import React from 'react'
import { User } from '../../types/appTypes';
import Account from '../Acoount/Account'
import styles from './Home.module.css'

const Home = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className={styles.container}>
      {user.role === 'admin' ? (
        <>
          <h1>Admin</h1>
        </>
      ) : <Account />}
    </div>
  )
}

export default Home