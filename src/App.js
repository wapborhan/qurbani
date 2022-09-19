import React, { useState, Component } from "react";
import { FaBars, FaUserCircle, FaAlignLeft } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
// Components Import
import MainComponents from "./components/MainComponents";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar isActive={this.state.isActive} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar
                isActive={this.state.isActive}
                handleToggle={this.handleToggle}
              />
              <MainComponents />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
