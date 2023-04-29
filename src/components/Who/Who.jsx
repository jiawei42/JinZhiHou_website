import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import "./Who.scss";
const Who = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="who-left">
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className="who-right">
          <div className="title"></div>
          <div className="whatwedo">
            <div className="line">
              <img src={process.env.PUBLIC_URL + "/line.png"} alt="-" />
            </div>
            <h2 className="subtitle">What we Do</h2>
          </div>
          <p className="description">這裡是要放一些對於你的工作理念或描述。</p>
          <div className="btn">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Who;
