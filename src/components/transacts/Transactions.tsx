import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/appTypes'
import { postTransaction } from '../../utils'


const CreateNewTransaction = () => {
  const navigate = useNavigate()
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  const url = process.env.REACT_APP_API_URL + '/transactions'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const response = await postTransaction(url, data, token)

    if (response) {
      alert('Transaction created successfully')
      setTimeout(() => {
        navigate('/')
      }, 2000);
    } else {
      alert('Transaction failed')
    }
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