import React from "react";

const index = (props) => {
  return (
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
          return (
            <div className="col-md-12 mb-5" key={item.id}>
              <div className="card shadow">
                <div className="card-body">প্রশ্নঃ {item.ques}</div>
                <div className="card-footer">প্রশ্ন করেছেনঃ {item.ask}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
