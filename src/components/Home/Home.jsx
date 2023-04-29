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
        <div className="home-left">
          <h1 className="title">Jinzhi.Studio</h1>
          <div className="whatwedo">
            <div className="line">
              <img src={process.env.PUBLIC_URL + "/line.png"} alt="-" />
            </div>
            <h2 className="subtitle">What we Do</h2>
          </div>
          <p className="description">這裡是要放一些對於你的工作理念或描述。</p>
          <div className="btn">Learn More</div>
        </div>
        <div className="home-right">
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="canvas" />
        </div>
      </div>
    </div>
  );
};

export default Home;
