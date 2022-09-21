import React, { Fragment } from "react";

const Date = () => {
  return (
    <Fragment>
      <div className="dateshow">
        {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
          day: "numeric",
          month: "long",
          weekday: "long",
          year: "numeric",
        }).format(Date.now())}
      </div>
      <div className="datehide">
        {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
          day: "numeric",
          month: "long",
          weekday: "long",
          // year: "numeric",
        }).format(Date.now())}
      </div>
    </Fragment>
  );
};

export default Date;
