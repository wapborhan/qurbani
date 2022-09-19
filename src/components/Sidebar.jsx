import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import sidenav from "./sidenav";

const Sidebar = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.isActive
            ? "sidebars text-light bg-dark  "
            : "sidebars text-light bg-dark active"
        }
      >
        <div className="logo-details">
          <GiCow />
          <span className="logo_name">কুরবানি</span>
        </div>
        <ul className="nav-links">
          {sidenav.map((data, idx) => (
            <li key={idx}>
              <NavLink to={data.path}>
                <i className="fas fa-exclamation-triangle text-white">
                  {data.icon}
                </i>
                <span className="links_name">{data.title} </span>
              </NavLink>
            </li>
          ))}
          <li className="log_out">
            <NavLink to="/about">
              <i className="fas fa-exclamation-triangle text-white">
                <FaInfoCircle />
              </i>
              <span className="links_name">About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
