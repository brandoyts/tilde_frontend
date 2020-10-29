import React from "react";

function Header({ displayName, logout }) {
  return (
    <header className="dashboard__header">
      <div className="container">
        <h1>App Logo</h1>
        <nav>
          <p>Welcome {displayName}!</p>
          <button onClick={logout} className="dashboard__header__link">
            LOGOUT
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
