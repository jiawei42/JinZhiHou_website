import React, { useState } from "react";

import ProductDesign from "./ProductDesign";
import "./Works.scss";
const Works = () => {
  const data = [
    "3D Design",
    "Development",
    "Illustration",
    "Product Design",
    "Photo Grapher",
  ];
  const [work, setWork] = useState("3D Design");
  return (
    <div id="section3" className="section">
      <div className="container">
        <div className="works-left">
          <ul className="list">
            {data.map((item) => (
              <li
                className="list-item"
                key={item}
                data-text={item}
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="works-right">
          {work === "3D Design" ? (
            <ProductDesign />
          ) : work === "Development" ? (
            <div className="content">456</div>
          ) : (
            <div className="content">維修中</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
