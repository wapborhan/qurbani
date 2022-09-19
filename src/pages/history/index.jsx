import React from "react";
import History from "./History";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-3">
          <div className="title h1">কুরবানীর ইতিহাস</div>
          <hr />
          {/* <div className="subtitle h5">
            প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা
          </div> */}
        </div>
      </div>
      <div className="row">
        <History />
      </div>
    </div>
  );
};

export default index;
