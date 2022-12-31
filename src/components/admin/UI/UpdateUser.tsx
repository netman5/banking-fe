import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { AccountContext } from '../../../context/accountContext';
import { AccountContextType, registeredUser, User } from '../../../types/appTypes';

const UpdateUser = () => {
  const { updateUser, registeredUsers } = React.useContext(AccountContext) as AccountContextType;
  const params = useParams<{ id: string }>();
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');


  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const user = registeredUsers.find(user => user.id === params.id) as registeredUser;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const password = passwordRef.current?.value;

    const updatedUser = { ...user }
    if (name) updatedUser.name = name;
    if (email) updatedUser.email = email;
    if (phone) updatedUser.phone_number = phone;
    if (password) updatedUser.password = password;

    await updateUser(params.id, process.env.REACT_APP_API_URL + '/auth/users', updatedUser, token);


  }

  return (
    <div>
      <h1 className='display-6'>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" ref={phoneRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" ref={passwordRef} />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default UpdateUser