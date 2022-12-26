import React, { useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../../context/accountContext'
import { AccountContextType, createTransactionData, transaction, User } from '../../types/appTypes'
import Success from './Success'


const CreateNewTransaction = () => {
  const [response, setResponse] = useState<transaction | {}>()
  const navigate = useNavigate()
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  const url = process.env.REACT_APP_API_URL + '/transactions'
  const { createTransaction } = React.useContext(AccountContext) as AccountContextType;

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

    await createTransaction(url, newData, token)
      .then(res => setResponse(res))
      .catch(err => console.log(err))
  }

  if (response) {
    return <div>
      <Success data={response} />
    </div>
  }

  return (
    <div>
      <BsArrowLeftCircleFill onClick={() => navigate('/')} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" />

          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
            <option value="transfer">Transfer</option>
          </select>

          <label htmlFor="destinationAcctNumber">Destination Account Number</label>
          <input type="text" name="destinationAcctNumber" id="destinationAcctNumber" />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewTransaction