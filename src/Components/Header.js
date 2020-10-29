import React from "react";
import { GrMenu } from "react-icons/gr";
import { IconButton } from "@chakra-ui/core";

function Header({ displayName, logout }) {
  return (
    <header className="dashboard__header">
      <div className="container">
        {/* <IconButton
          size="sm"
          variantColor="blue"
          aria-label="toggle nav"
          icon={GrMenu}
        /> */}
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
