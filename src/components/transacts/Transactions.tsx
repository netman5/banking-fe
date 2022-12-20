import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const CreateNewTransaction = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
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