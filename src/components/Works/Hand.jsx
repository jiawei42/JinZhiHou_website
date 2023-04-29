import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Hand(props) {
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/hand.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ArmBaseModel_BravFGArmBaseModel_BravFG.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface2.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface4.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface7.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface8.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface9.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface10.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface11.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface12.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface13.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface14.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface15.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface16.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface17.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface18.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface19.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface20.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface21.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface22.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface23.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface24.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface25.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface26.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface27.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface29.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface30.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface31.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface32.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface33.geometry}
        material={materials.StingrayPBS1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/hand.gltf");
