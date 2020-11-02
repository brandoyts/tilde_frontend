import React from "react";
import { Link } from "react-router-dom";

function Header({ displayName, logout }) {
  return (
    <header className="dashboard__header">
      <div className="container">
        <h1>App Logo</h1>
        <nav>
          <p>Welcome {displayName}!</p>
          <Link to="/add-guest" className="dashboard__header__link">
            Guest
          </Link>
          <p onClick={logout} className="dashboard__header__link">
            LOGOUT
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
