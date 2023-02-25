import React from 'react';
export default function Login() {
  return (
    <div>
      <h3>Login</h3>
      <div>
        <div>
          <label>First name</label>
          <input type="text" name="firstname" />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" name="lastname" />
        </div>
        <button type="submit">Register</button>
        <a href="./forgotten">Forgot Password?</a>|
        <a href="./register">Sign up</a>
      </div>
    </div>
  );
}
