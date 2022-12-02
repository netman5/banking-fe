import React from 'react'
import { User } from '../../types/appTypes'
import Account from '../Acoount/Account'
import Login from '../Auth/Login'
import Layout from '../Layouts/Layout'
import styles from './Home.module.css'

const Home = () => {
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Layout>
        <div className={styles.container}>
            {token ? <Account /> : <Login />}
        </div>
    </Layout>
  )
}

export default Home