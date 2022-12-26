import React, { useEffect } from 'react'
import CreateTransactionButton from '../Buttons/Button'

const Success = (props: any) => {
  const { data } = props
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = '/'
  //   }, 60000)
  // }, [])

  return (
    <div>
      <h1 className='display-6 mb-5 text-center'>{`Your ${data.type} transaction was successfull`}</h1>

      <div className='row'>
        <div className='col-6'>
          <p className='lead'>Transaction ID: {data._id}</p>
          <p className='lead'>Transaction Amount: ${data.amount}</p>
          <p className='lead'>Transaction Type: {data.type}</p>
          <p className='lead'>Destination Account Number: {data.destinationAcctNumber}</p>
        </div>
        <div className='col-6'>
          <p className='lead'>Account Number: {data.accountNumber}</p>
          <p className='lead'>Account Balance: ${data.balance}</p>
          <p className='lead'>Account Type: {data.accountType}</p>
          <p className='lead'>Account Status: {data.status}</p>
        </div>
      </div>

      <CreateTransactionButton />
    </div>
  )
}

export default Success