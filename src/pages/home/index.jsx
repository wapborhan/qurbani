import React, { Fragment, Component } from "react";
import Qurbani from "../qurbani";
import Form from "./Form";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Qurbani />
      </Fragment>
    );
  }
}

export default index;
