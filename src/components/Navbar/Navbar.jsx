import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>Houjinzhi</h1>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a href="#!" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link">
              Studio
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link">
              Works
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
