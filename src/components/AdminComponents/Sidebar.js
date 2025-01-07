import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-yellow-dark text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <ul>
        <li className="mb-4">
          <NavLink
            to="/admin-panel/profile"
            className="hover:text-yellow-light"
            activeClassName="font-semibold"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin-panel/pandits"
            className="hover:text-yellow-light"
            activeClassName="font-semibold"
          >
            Pandits
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
