import React from 'react';
export default function Register() {
  return (
    <div>
      <h3>Registration</h3>
      <div>
        <div>
          <label>First name</label>
          <input type="text" name="firstname" />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" name="lastname" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" />
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" name="country" />
        </div>
        <button type="submit">Register</button>
        <a href="./login">Login</a>
      </div>
    </div>
  );
}
