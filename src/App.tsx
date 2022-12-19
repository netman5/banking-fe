import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import CreateNewTransaction from './components/transacts/Transactions';
import { User } from './types/appTypes';

function App() {
  const { token }: User = JSON.parse(localStorage.getItem('user') || '{}');
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
                <Route path='/new-transactions' element={<CreateNewTransaction />} />
              </>
            ) : <Route path="/login" element={<Login />} />}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
