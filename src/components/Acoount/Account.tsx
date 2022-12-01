import React from 'react'

const Account = () => {
  const { userId} = JSON.parse(localStorage.getItem('user')) || {};
  return (
    <div>Account</div>
  )
}

export default Account