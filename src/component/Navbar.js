import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header-item">
        <Link to="/" exact={true}>
          <strong>Awesome Blog</strong>
        </Link>
      </div>
      <div className="header-item">
        <form>
          <input placeholder="search post" type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="header-item">
        <Link to="/login" exact={true}>
          <strong>Login</strong>
        </Link>
        <button>Theme</button>
      </div>
    </div>
  );
}
