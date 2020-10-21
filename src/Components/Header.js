import React from "react";
import { GrMenu } from "react-icons/gr";
import { IconButton } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

function Header({ username, logout }) {
	return (
		<header className="dashboard__header">
			<div className="container">
				<IconButton
					size="sm"
					variantColor="blue"
					aria-label="toggle nav"
					icon={GrMenu}
				/>

				<nav>
					<NavLink
						className="dashboard__header__link"
						activeClassName="dashboard__header__active-link"
						to="/account"
					>
						{username}
					</NavLink>
					<button
						onClick={logout}
						className="dashboard__header__link"
					>
						LOGOUT
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Header;
