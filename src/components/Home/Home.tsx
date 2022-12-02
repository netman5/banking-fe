import React from 'react'
import Account from '../Acoount/Account'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Account />
    </div>
  )
}

export default Home