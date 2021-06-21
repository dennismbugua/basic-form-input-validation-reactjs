import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h1>Login User</h1>
      <form className="form">
        <div className="form-item">
          <label>Email: </label>
          <input name="email" type="email" required autoFocus />
        </div>
        <div className="form-item">
          <label>Password: </label>
          <input name="password" type="password" required />
        </div>
        <div className="form-item">
          <label> </label>
          <button>Login</button>
        </div>
        <div className="form-item">
          <label> </label>
          <span>
            New User? <Link to="/register">Create Account</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
