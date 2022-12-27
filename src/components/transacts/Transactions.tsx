import React, { useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../../context/accountContext'
import { AccountContextType, createTransactionData, transaction, User } from '../../types/appTypes'
import InsufficientFunds from './InsufficientFunds'
import Success from './Success'


const CreateNewTransaction = () => {
  const [response, setResponse] = useState<transaction | {}>()
  const [formData, setFormData] = useState<createTransactionData>({} as createTransactionData)
  const navigate = useNavigate()
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  const url = process.env.REACT_APP_API_URL + '/transactions'
  const { createTransaction, account } = React.useContext(AccountContext) as AccountContextType;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    let { amount, type, destinationAcctNumber } = data

    const newData: createTransactionData = {
      amount: parseFloat(Number(amount).toFixed(2)),
      type: type as 'debit' | 'credit' | 'transfer',
      destinationAcctNumber: destinationAcctNumber as string
    }
    setFormData(newData)
    await createTransaction(url, newData, token)
      .then(res => setResponse(res))
      .catch(err => console.log(err))
  }

  if (formData.amount > account?.balance && formData.type === 'debit') {
    return <div>
      <InsufficientFunds />
    </div>
  }

  if (response) {
    return <div>
      <Success data={response} />
    </div>
  }

  return (
    <div className='container'>
      <button type='button' className='btn btn-primary mb-5' onClick={() => navigate('/')}><BsArrowLeftCircleFill /> Account</button>
      <form onSubmit={handleSubmit} className='row g-3 w-75 mx-auto p-5'>
        <div className='col-md-6'>
          <label htmlFor="amount" className='form-label'>Amount</label>
          <input type="number" name="amount" id="amount" className='form-control' placeholder='Amount' required />
        </div>

        <div className='col-md-6'>
          <label htmlFor="type" className='form-label'>Type</label>
          <select name="type" id="type" className='form-select'>
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>

        <div className='col-md-6'>
          <label htmlFor="destinationAcctNumber" className='form-label'>Destination Account Number</label>
          <input type="text" name="destinationAcctNumber" id="destinationAcctNumber" className='form-control' placeholder='Account number to transfer to' required />
        </div>

        <div className='d-grid col-2 mt-5'>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewTransaction