import React from "react";
import { Link } from "react-router-dom";

const Breadcamp = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">মূল পাতা</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/question">মাসায়েল</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          উত্তর
        </li>
      </ol>
    </nav>
  );
};

export default Breadcamp;
