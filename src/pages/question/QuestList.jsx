import React from "react";

const QuestList = (props) => {
  // console.log(props.selectedSuraHandler);
  const item = props.item;
  return (
    <div className="col-md-12 mb-5">
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
    </div>
  );
};

export default QuestList;
