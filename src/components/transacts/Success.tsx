import React, { useEffect } from 'react'
import { User, account } from '../../types/appTypes';
import CreateTransactionButton from '../Buttons/Button'

const Success = (props: any) => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const [account, setAccount] = React.useState<account>({} as account);
  const isLoading = true
  const { data } = props
  const { _id, amount, type, destinationAcctNumber } = data

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/'
    }, 60000)
  }, [])

  useEffect(() => {
    const userAccount = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/accounts/${user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const data = await response.json()
      setAccount(data)
    }
    userAccount();
  }, [user.id, user.token])

  return (
    <div>
      {!isLoading ? <div>Loading...</div> : (
        <><h1 className='display-6 mb-5 text-center'>{`Your ${type} transaction was successfull`}</h1><h2 className='mb-5 text-center'>Transaction Details</h2><div className='row'>
          <div className='col-6'>
            <p className='lead'>Transaction ID: {_id}</p>
            <p className='lead'>Transaction Amount: ${amount}</p>
            <p className='lead'>Transaction Type: {type}</p>
            <p className='lead'>Destination Account Number: {destinationAcctNumber}</p>
          </div>
          <div className='col-6'>
            <p className='lead'>Account Number: {account.accountNumber}</p>
            <p className='lead'>Account Balance: ${account.balance}</p>
            <p className='lead'>Account Type: Current</p>
            <p className='lead'>Account Status: Active</p>
          </div>
        </div><CreateTransactionButton /></>
      )}
    </div>
  )
}

export default Success