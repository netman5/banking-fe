import React from 'react'

const AccountInfo = (props: any) => {
  return (
    <div>
      <span>status: Active</span>
      <span>Account Type: Current</span>
      <span>Account Number: {props.accountNumber}</span>
      Currency: USD
    </div>
  )
}

export default AccountInfo