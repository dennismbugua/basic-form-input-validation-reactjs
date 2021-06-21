import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="form">
      <h1>Register User</h1>
      <div className="form-item">
        <label>Name: </label>
        <input name="name" type="name" required autoFocus />
      </div>
      <div className="form-item">
        <label>Email: </label>
        <input name="email" type="email" required />
      </div>
      <div className="form-item">
        <label>Password: </label>
        <input name="password" type="password" required />
      </div>
      <div className="form-item">
        <label> </label>
        <button>Create Account</button>
      </div>
      <div className="form-item">
        <label> </label>
        <span>
          Already Have an Account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}
