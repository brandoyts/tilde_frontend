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
          <span>Dashboard</span>
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
          <span>TRACE</span>
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
          <span>REPORTS</span>
        </div>
      </NavLink>
    </nav>
  );
}

export default Sidebar;
