import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="login-btn">Login Now</button>
        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
