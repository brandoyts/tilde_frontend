import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { FaMapMarkerAlt, FaRegChartBar } from "react-icons/fa";

function Sidebar() {
	return (
		<nav className="dashboard__sidebar text-dark">
			<NavLink
				exact
				to="/"
				className="sidebar-link"
				activeClassName="sidebar-active"
			>
				<div>
					<i>
						<RiDashboardFill />
					</i>
					Dashboard
				</div>
			</NavLink>
			<NavLink
				to="/trace"
				className="sidebar-link"
				activeClassName="sidebar-active"
			>
				<div>
					<i>
						<FaMapMarkerAlt />
					</i>
					TRACE
				</div>
			</NavLink>
			<NavLink
				to="/reports"
				className="sidebar-link"
				activeClassName="sidebar-active"
			>
				<div>
					<i>
						<FaRegChartBar />
					</i>
					REPORTS
				</div>
			</NavLink>
		</nav>
	);
}

export default Sidebar;
