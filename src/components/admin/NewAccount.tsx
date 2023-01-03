import React from 'react'
import AccountsWrapper from './AccountsWrapper'

const NewAccount = () => {
  const nameRef = React.useRef<HTMLInputElement>(null)
  const accountRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      id: '1',
      name: nameRef.current?.value,
      accountNumber: accountRef.current?.value
    }
    console.log(nameRef.current?.value)
    console.log(accountRef.current?.value)
  }

  return (
    <AccountsWrapper>
      <div>
        <h1 className='display-6'>New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" ref={nameRef} />
          </div>

          <div className="form-group">
            <label htmlFor="account">Account Number</label>
            <input type="text" className="form-control" id="account" ref={accountRef} />
          </div>

          <button>Create</button>
        </form>
      </div>
    </AccountsWrapper>
  )
}

export default NewAccount