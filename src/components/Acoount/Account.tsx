import React from 'react'
import { User } from '../../types/appTypes';

const Account = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const { id } = user;
  console.log(id)
  return (
    <div>Account</div>
  )
}

export default Account