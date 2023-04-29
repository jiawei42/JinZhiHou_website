import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Hand from "./Hand";
import "./Works.scss";

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage intensity={0.5} shadows="contact" environment="city">
            <Hand />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <div className="pd-des">
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </div>
    </>
  );
};

export default ProductDesign;
