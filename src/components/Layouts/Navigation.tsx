import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../types/appTypes';
import { logout } from '../../utils';
import classes from './Layout.module.css'

const Navigation = (): JSX.Element => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();
  const { token, role } = user;

  const logoutHandler = () => {
    logout();
    navigate('/login');
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to={token ? '/' : '/login'}>Ficti Bank</Link></div>
      <nav>
        <ul>
          {token ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li onClick={logoutHandler}>
                <Link to="/login">Logout</Link>
              </li>

              {role === 'admin' && (
                <>
                  <li>
                    <Link to="/accounts">Accounts</Link>
                  </li>

                  <li>
                    <Link to="/new-account">Create Account</Link>
                  </li>

                </>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation