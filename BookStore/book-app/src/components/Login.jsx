import React from 'react';
import './Login.css';
import { Link,Routes, Route } from 'react-router-dom';
function Login() {
  return (
    <div className="login-container">
        <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default Login;
