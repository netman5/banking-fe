import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const InsufficientFunds = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className='display-5 text-center'>Sorry! Insufficient funds</h1>
      <p className='lead text-center'>It's look like you don't have enough funds, Please check your account balance and try again.</p>
      <div className='d-grid col-2 mx-auto mt-5'>
        <button type='button' className='btn btn-primary' onClick={() => navigate('/')}><BsArrowLeftCircleFill /> Account</button>
      </div>
    </>
  )
}

export default InsufficientFunds