import React from "react";
import Breadcamp from "./Breadcamp";

const QuestionDetails = (props) => {
  console.log(props.data);
  const item = props.data;
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
