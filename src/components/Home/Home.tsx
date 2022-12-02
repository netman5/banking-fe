import React from 'react'
import { User } from '../../types/appTypes'
import Account from '../Acoount/Account'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Account />
      hello
    </div>
  )
}

export default Home