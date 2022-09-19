import React, { Fragment } from "react";
import {
  FaBars,
  FaFacebookSquare,
  FaAlignLeft,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaCodepen,
} from "react-icons/fa";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav
        id="topbar"
        className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
      >
        <div
          className="sidebars-button text-dark mr-auto"
          onClick={props.handleToggle}
        >
          {props.isActive ? <FaBars /> : <FaAlignLeft />}
          <div className={props.isActive ? "dashboard" : "dashboard-show"}>
            কুরবানি
          </div>
        </div>

        <h2 id="nameTitle" className="text-center text-dark">
          <span className="heabar">কুরবানী সম্পর্কে</span>{" "}
        </h2>
        <div className="account ">
          <ul className="d-flex list-unstyled justify-content-around">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <FaCodepen />
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
