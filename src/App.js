import React, { useState } from "react";
import MainComponents from "./components/MainComponents";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { FaBars, FaUserCircle, FaAlignLeft } from "react-icons/fa";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div
          className={
            isActive
              ? "sidebars bg-dark text-light  "
              : "sidebars bg-dark text-light active"
          }
        >
          <Sidebar />
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              id="topbar"
              className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
            >
              <div
                className="sidebars-button text-dark mr-auto"
                onClick={handleToggle}
              >
                {isActive ? <FaBars /> : <FaAlignLeft />}
                {/* <FaBars /> */}
                <div className={isActive ? "dashboard" : "dashboard-show"}>
                  SR BUDGET
                </div>
              </div>

              <h2 id="nameTitle" className="text-center text-dark">
                আয় ব্যয় হিসাব
              </h2>
              <div className="account ">
                <a href="#">
                  <FaUserCircle />
                </a>
              </div>
            </nav>
            <MainComponents />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
