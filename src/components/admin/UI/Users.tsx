import React, { useEffect } from 'react'
import { AccountContext } from '../../../context/accountContext';
import { AccountContextType, User } from '../../../types/appTypes';
import AccountsWrapper from '../AccountsWrapper'

function Users() {
  const { registeredUsers, setRegisteredUsers, getAllUsers } = React.useContext(AccountContext) as AccountContextType;
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers(process.env.REACT_APP_API_URL + '/auth/users', user.token);
      setRegisteredUsers(users);
    }
    fetchUsers();
  }, [getAllUsers, setRegisteredUsers, user.token])

  function deleteUserById(id: string): void {
    console.log(id);

  }

  return (
    <AccountsWrapper>
      <div>
        <h1 className='display-6'>Registered Users</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Id</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
                <td>{user.phone_number}</td>
                <td><button className='btn btn-dark' onClick={() => deleteUserById(user.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccountsWrapper>
  )
}

export default Users