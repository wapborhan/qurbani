import React, { Fragment, Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//Data
import QUESTION from "./assets/data/index";
// Page Import
import {
  Home,
  Amol,
  History,
  Question,
  Developer,
  QurbaniDetails,
} from "./pages";
import NotFound from "./components/NotFound";

export default class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: QUESTION,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid topbarpt">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" exact element={<Home />} />
            <Route
              path="/question"
              exact
              element={<Question data={this.state.question} />}
            />
            <Route path="/history" element={<History />} exact />
            <Route path="/amol" element={<Amol />} exact />
            <Route path="/qurbani-details" element={<QurbaniDetails />} exact />
            <Route path="/about" element={<Developer />} exact />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Fragment>
    );
  }
}
