import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NewAccount from './components/admin/NewAccount';
import AccountDetails from './components/admin/UI/AccountDetails';
import AccountPage from './components/admin/UI/AccountHome';
import UpdateUser from './components/admin/UI/UpdateUser';
import Users from './components/admin/UI/Users';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Error from './components/Error';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import Success from './components/transacts/Success';
import CreateNewTransaction from './components/transacts/Transactions';
import { User } from './types/appTypes';

function App() {
  const { token, role }: User = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/signup" element=<Signup /> />
            <Route path="/login" element=<Login /> />

            {token ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path='/transactions' element={'transactions'} />
                <Route path='/transactions/new' element={<CreateNewTransaction />} />
                <Route path='/success' element={<Success />} />

                {role === 'admin' && (
                  <>
                    <Route path='/accounts' element={<AccountPage />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/accounts/:id/new' element={<NewAccount />} />
                    <Route path='/accounts/:id' element={<AccountDetails />} />
                    <Route path='/accounts/:id/update' element={<UpdateUser />} />
                  </>
                )}
              </>
            ) : ('')}

            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
