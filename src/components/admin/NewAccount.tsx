import React from 'react'
import AccountsWrapper from './AccountsWrapper'
import { useLocation, useNavigate } from 'react-router-dom';
import { AccountContext } from '../../context/accountContext';
import { AccountContextType, User } from '../../types/appTypes';

const NewAccount = () => {
  const nameRef = React.useRef<HTMLInputElement>(null)
  const accountRef = React.useRef<HTMLInputElement>(null)
  const location = useLocation()
  const data = location.state as { id: string, name: string, accountNumber: string }
  const [success, setSuccess] = React.useState<boolean>(false)
  const { createAccount } = React.useContext(AccountContext) as AccountContextType;
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  const navigation = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = nameRef.current?.value
    const account = accountRef.current?.value

    const newAccount = {
      name,
      userId: data.id,
      accountNumber: account
    }

    const res = await createAccount(process.env.REACT_APP_API_URL + '/accounts', newAccount, token)

    if (res) {
      nameRef.current!.value = ''
      accountRef.current!.value = ''
      setSuccess(true)
    }

  }

  React.useEffect(() => {
    if (data) {
      nameRef.current!.value = data.name
      accountRef.current!.value = data.accountNumber
    }
  }, [data])

  React.useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      navigation('/accounts')
    }
  }, [success, navigation])

  return (
    <AccountsWrapper>
      <div>
        {success && <div className='alert alert-success alert-dismissible fade show' role="alert">
          User updated successfully
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setSuccess(false)}></button>
        </div>}
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