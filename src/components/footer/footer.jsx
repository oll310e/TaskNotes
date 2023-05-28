import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer__container">
      <ul className="footer__container-list">
        <li>
          <a href="/">Contacts</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
