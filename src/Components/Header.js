import React from "react";
import { GrMenu } from "react-icons/gr";
import { IconButton } from "@chakra-ui/core";
import { NavLink, Link } from "react-router-dom";

function Header() {
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
						ACCOUNT
					</NavLink>
					<NavLink
						className="dashboard__header__link"
						activeClassName="dashboard__header__active-link"
						to="/logout"
					>
						LOGOUT
					</NavLink>
				</nav>
			</div>
		</header>
	);
}

export default Header;
