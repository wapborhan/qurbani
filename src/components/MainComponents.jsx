import React, { Fragment, Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
//  Pages Import
import Dashboard from "./pages/dashboard/Dashboard";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
// import FilteringTable from "./FilteringTable/FilteringTable";

import DATA from "../assets/data/data";
import NotFound from "./pages/notfound/NotFound";

export default class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid topbarpt">
          <Routes baseline="/income-expense-react">
            <Route
              path="/income-expense-react"
              exact
              element={<Dashboard alldata={this.state.data} />}
            />
            <Route
              path="/"
              element={<Navigate replace to="/income-expense-react" />}
            />
            <Route
              path="/income"
              exact
              element={<Income data={this.state.data.incomeDetails} />}
            />
            <Route
              path="/expense"
              exact
              element={<Expense data={this.state.data.expenseDetails} />}
            />
            {/* <Route path="/table" exact element={<FilteringTable />} /> */}
            {/* <Route path="/about" exact  element={<Invoices />} /> */}
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </div>
      </Fragment>
    );
  }
}
