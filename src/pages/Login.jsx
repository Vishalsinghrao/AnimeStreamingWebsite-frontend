import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { useAuth } from '../components/AuthContext';
import config from '../components/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${config.API_URL}/login`, { email, password },{ withCredentials: true })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          login();
          navigate('/anime')
        } else {
          alert('No Such user exist please Signup')
        }

      })
      .catch(error => console.error(error));
  };
  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|in)$"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log in</button>
          <Link to='/signup'><h4>Not a user? <span>Sign up</span></h4></Link>
        </form>

      </div>
    </div>
  )
}

export default Login
