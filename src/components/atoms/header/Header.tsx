import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header-container">
        <div className="header-title"></div>
        <div className="Header-list">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>
      </div>
    </>
  );
};
export default Header;
