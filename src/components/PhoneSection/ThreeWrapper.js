import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import PhoneModel from "./PhoneModel";

function ThreeWrapper() {

  return (
    <Canvas camera={{ position: [5, 5, 100] }}>
      <Suspense fallback={null}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <PhoneModel position={[0, -45, 0]} scale={1.5} />
      </Suspense>
    </Canvas>
  );
}

export default ThreeWrapper;
