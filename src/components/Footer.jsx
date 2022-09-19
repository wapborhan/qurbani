import React from "react";

const Footer = () => {
  return (
    <footer className="mt-1">
      <div className="container py-3 ">
        <h6 id="nameTitle" className="text-center text-dark">
          সাইট ডিজাইন করেছেন{" "}
          <a
            className="text-decoration-none text-danger"
            href="https://www.srdreamlab.com"
            target="_BLANK"
          >
            SR Dream Lab
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
