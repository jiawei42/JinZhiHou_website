import React from "react";
import Navbar from "../Navbar/Navbar";
// , { Suspense }
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./Home.scss";
const Home = () => {
  return (
    <div className="section">
      <Navbar />
      <div className="home_container">
        <div className="home-middle">
          <h1 className="title">Jinzhi.Studio</h1>
          <div className="whatwedo">
            <h2 className="subtitle">What We Think</h2>
            <img
              src={process.env.PUBLIC_URL + "/homepage_banner.gif"}
              alt="homepage_banner"
            />
          </div>
          <p className="description">
            To be irreplaceable, you must always be different.
          </p>
          <div className="btn">了解更多</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
