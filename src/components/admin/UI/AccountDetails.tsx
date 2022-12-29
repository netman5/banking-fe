import React from 'react'

const AccountDetails = (props: any) => {
  const { account, transactions } = props;
  console.log(account, transactions)
  return (
    <div>AccountDetails</div>
  )
}

export default AccountDetails