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
import Date from "./Date";

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
        <Date />
      </nav>
    </Fragment>
  );
};

export default NavBar;
