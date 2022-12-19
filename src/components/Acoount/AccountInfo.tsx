import React from 'react'
import Styles from './Account.module.css'

const AccountInfo = (props: any) => {
  return (
    <ul className={Styles.infos}>
      <li><span>status:</span> <span>Active</span></li>
      <li>Account Type: Current</li>
      <li>Account Number: {props.accountNumber}</li>
      <li>Currency: USD</li>
    </ul>
  )
}

export default AccountInfo