import React, { Fragment } from "react";

import QuestList from "./QuestList";

const index = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-3">
            <div className="title h1">কুরবানি নিয়ে কিছু প্রশ্ন উত্তর</div>
            <div className="subtitle h5">
              প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা
            </div>
          </div>
        </div>
        <div className="row">
          {props.data.map((item) => {
            // console.log(item);
            return (
              <QuestList
                key={item.id}
                item={item}
                selectedQuesHandler={() => {
                  props.selectedQuesHandler(item.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default index;
