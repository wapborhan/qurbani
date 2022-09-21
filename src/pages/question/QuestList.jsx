import React from "react";
import { Link } from "react-router-dom";

const QuestList = (props) => {
  // console.log(props.selectedSuraHandler);
  const item = props.item;
  return (
    <div className="col-md-12 mb-5">
      <Link
        to={"/question/" + item.id}
        className="text-decoration-none text-dark"
      >
        <div
          className="card shadow"
          style={{
            cursor: "pointer",
          }}
          onClick={props.selectedQuesHandler}
        >
          <div className="card-body">
            <strong>প্রশ্নঃ </strong>
            {item.ques}
          </div>
          <div className="card-footer">
            <strong>প্রশ্ন করেছেনঃ </strong>
            {item.ask}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QuestList;
