import React from 'react'
import { AccountContext } from '../../../context/accountContext';
import { AccountContextType } from '../../../types/appTypes';
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const AccountDetails = () => {
  const { accountDetail, transactions } = React.useContext(AccountContext) as AccountContextType;
  const navigate = useNavigate()
  return (
    <div className='w-75 mx-auto borders'>
      <h1 className='display-4 text-center mb-5'>Account Details</h1>
      <div className='container'>
        <div className='row'>
          <div className='d-flex col-md-8'>
            <span className='lead'>Account Name: {accountDetail.name}</span>
            <span className='lead'>Account Number: {accountDetail.accountNumber}</span>
            <span className='lead'>Account Balance: ${accountDetail.balance}</span>
          </div>
          <div className='col-md-4'>
            <button className='btn btn-secondary' onClick={() => navigate('/accounts')}>
              <BsArrowLeftCircleFill />
              {' '}
              Back to Accounts</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='display-4 text-center p-3'>Transactions</h1>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Type</th>
              <th scope='col'>Transaction ID</th>
              <th scope='col'>Account Number</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction._id}>
                <th scope='row'>{index + 1}</th>
                <td>${transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction._id}</td>
                <td>{transaction.destinationAcctNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default AccountDetails