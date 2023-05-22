import React, { useState } from "react";
import "./SideNavbar.scss";

const SideNavbar = () => {
  const [selectedSection, setSelectedSection] = useState("section1"); // 預設選擇第一個section

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId); // 更新當前選擇的section
  };

  return (
    <ul className="sidebar-nav">
      <li>
        <a
          href="#section1"
          className={`nav-button ${
            selectedSection === "section1" ? "selected" : ""
          }`}
          onClick={() => handleSectionClick("section1")}
        >
          <span></span>
        </a>
      </li>
      <li>
        <a
          href="#section2"
          className={`nav-button ${
            selectedSection === "section2" ? "selected" : ""
          }`}
          onClick={() => handleSectionClick("section2")}
        >
          <span></span>
        </a>
      </li>
      <li>
        <a
          href="#section3"
          className={`nav-button ${
            selectedSection === "section3" ? "selected" : ""
          }`}
          onClick={() => handleSectionClick("section3")}
        >
          <span></span>
        </a>
      </li>
      <li>
        <a
          href="#section4"
          className={`nav-button ${
            selectedSection === "section4" ? "selected" : ""
          }`}
          onClick={() => handleSectionClick("section4")}
        >
          <span></span>
        </a>
      </li>
    </ul>
  );
};

export default SideNavbar;
