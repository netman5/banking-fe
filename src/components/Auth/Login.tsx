import React, { useRef } from 'react';
import Styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginData } from '../../types/appTypes';

const url = process.env.REACT_APP_API_URL + '/auth/login';

const Login = () => {
  const navigate = useNavigate();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: loginData = {
      email: email.current ? email.current.value : '',
      password: password.current ? password.current.value : '',
    };

    try {
      const response = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.login}>
      <div className={Styles.loginWrapper}>
        <div className={Styles.loginLeft}>
          <h3 className={Styles.loginLogo}>Ficti Bank</h3>
          <span className={Styles.loginDesc}>
            Ficti, your way to financial freedom.
          </span>
        </div>

        <div className={Styles.loginRight}>
          <form className={`${Styles.loginBox} ${Styles.authBox}`} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className={Styles.loginInput}
            />

            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
              className={Styles.loginInput}
            />

            <button type="submit" className={Styles.loginBtn}>
              Log In
            </button>
            <span className={Styles.loginForgot}>Forgot Password?</span>

            <Link to="/signup" style={{ alignSelf: 'center' }}>
              <button type="button" className={Styles.loginRegistration}>
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login