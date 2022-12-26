import React, { useEffect } from 'react'
import { AccountContext } from '../../context/accountContext';
import { AccountContextType } from '../../types/appTypes';
import CreateTransactionButton from '../Buttons/Button'

const Success = (props: any) => {
  const { account } = React.useContext(AccountContext) as AccountContextType;
  const isLoading = true
  const { data } = props
  const { _id, amount, type, destinationAcctNumber } = data
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/'
    }, 60000)
  }, [])
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
            <p className='lead'>Account Balance: ${account.balance - amount}</p>
            <p className='lead'>Account Type: Current</p>
            <p className='lead'>Account Status: Active</p>
          </div>
        </div><CreateTransactionButton /></>
      )}
    </div>
  )
}

export default Success