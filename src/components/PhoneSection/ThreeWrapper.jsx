import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import PhoneModel from "./PhoneModel";

function ThreeWrapper() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [frameloop, setFrameloop] = useState("always");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          setFrameloop("always");
        } else {
          setFrameloop("never");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {mounted && (
        <Canvas
          camera={{ position: [5, 5, 100] }}
          dpr={1}
          frameloop={frameloop}
          performance={{ min: 0.5 }}
          gl={{ antialias: false, powerPreference: "low-power" }}
          flat
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <PhoneModel position={[0, -45, 0]} scale={1.5} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default ThreeWrapper;
