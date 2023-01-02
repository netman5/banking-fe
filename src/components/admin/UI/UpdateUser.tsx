import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AccountContext } from '../../../context/accountContext';
import { AccountContextType, registeredUser, User } from '../../../types/appTypes';

const UpdateUser = () => {
  const { updateUser, registeredUsers } = React.useContext(AccountContext) as AccountContextType;
  const params = useParams<{ id: string }>();
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
  const [suceess, setSuccess] = React.useState<boolean>(false);
  const [inputs, setInputs] = React.useState<registeredUser>({} as registeredUser);
  const navigate = useNavigate();

  console.log(inputs);

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

    const res = await updateUser(params.id, process.env.REACT_APP_API_URL + '/auth/users', updatedUser, token);
    setInputs(res.data)

    if (res) {
      nameRef.current!.value = '';
      emailRef.current!.value = '';
      phoneRef.current!.value = '';
      passwordRef.current!.value = '';
      setSuccess(true);
    }

  }

  const handleDismiss = () => {
    setSuccess(false);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <div>
      {suceess && <div className='alert alert-success alert-dismissible fade show' role="alert">
        User updated successfully
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleDismiss()}></button>
      </div>}
      <h1 className='display-6 mb-5 text-center'>Update User</h1>
      <form onSubmit={handleSubmit} className='row w-50 mx-auto'>
        <div className="form-group col-md-12 mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="form-group col-md-12 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" ref={emailRef} />
        </div>
        <div className="form-group col-md-12 mb-3">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" ref={phoneRef} />
        </div>
        <div className="form-group col-md-12 mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" ref={passwordRef} />
        </div>
        <div className='col-md-12 mt-3' style={{ 'display': 'flex', 'gap': '20px' }}>
          <button type="submit" className="btn btn-primary p-2 col-md-4">Update</button>
          <button type="button" className="btn btn-secondary p-2 col-md-4" onClick={() => navigate('/users')}>Return to Users</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser