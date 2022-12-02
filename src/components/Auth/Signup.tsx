import React, { useRef } from 'react';
import Styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../utils';
import { signupData } from '../../types/appTypes';

const url: string = process.env.REACT_APP_API_URL + '/auth/signup';

const Signup = () => {
  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: signupData = {
      name: name.current ? name.current.value : '',
      email: email.current ? email.current.value : '',
      password: password.current ? password.current.value : '',
      phone_number: phoneNumber.current ? phoneNumber.current.value : '',
    };

    try {
      const response = await postData(url, data);
      if (response.status === 201) {
        navigate('/login');
      }
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
            Ficti your way to unending financial freedom.
          </span>
        </div>

        <div className={Styles.loginRight}>
          <form className={`${Styles.signupBox} ${Styles.authBox}`} onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Enter Name"
              className={Styles.loginInput}
              ref={name}
            />
            <input
              type="email"
              required
              placeholder="Email"
              className={Styles.loginInput}
              ref={email}
            />

            <input
              type="password"
              required
              placeholder="Password"
              className={Styles.loginInput}
              ref={password}
            />

            <input
              type="text"
              required
              placeholder="Enter phone number"
              className={Styles.loginInput}
              ref={phoneNumber}
            />

            <button className={Styles.loginBtn} type="submit">
              Sign Up
            </button>

            <Link to="/login" style={{ alignSelf: 'center' }}>
              <button type="button" className={Styles.loginRegistration}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup