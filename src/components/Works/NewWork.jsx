import React from "react";
import "./NewWork.scss";
import { Carousel } from "antd";
import Hand from "./Hand";
const carouselItems = [
  {
    title: "3D Modelling",
    content: <Hand />,
  },
  {
    title: "Photographer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et enim sagittis, placerat nulla et, hendrerit arcu.",
  },
  {
    title: "Animation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et enim sagittis, placerat nulla et, hendrerit arcu.",
  },
  {
    title: "Illustration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et enim sagittis, placerat nulla et, hendrerit arcu.",
  },
];
const WorksCarousel = () => {
  return (
    <div id="section3" className="section">
      <Carousel>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WorksCarousel;
