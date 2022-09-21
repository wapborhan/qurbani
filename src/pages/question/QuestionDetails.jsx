import React from "react";
import Breadcamp from "./Breadcamp";
import { NavLink } from "react-router-dom";

const QuestionDetails = (props) => {
  console.log(props.data);
  const item = props.data;
  if (item == null) {
    return (
      <div className="topbarpt d-flex justify-content-center mt-5 mb-5">
        <h2>
          Something Wrong Goto{" "}
          <NavLink to="/question" className="btn  btn-success mt-5 mb-5">
            HomePages
          </NavLink>
        </h2>
      </div>
    );
  }
  return (
    <div className="row">
      <Breadcamp />
      <div className="col-md-12 mb-5">
        <div className="card shadow">
          <div className="card-header">
            <strong>প্রশ্নঃ </strong>
            {item.ques}
            <br />
            <br />
            <strong>প্রশ্ন করেছেনঃ </strong>
            {item.ask}
          </div>
          <div className="card-body">
            <strong>উত্তরঃ </strong>
            {item.ans}
            <br />
            <br />
            <strong>{item.ref}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
