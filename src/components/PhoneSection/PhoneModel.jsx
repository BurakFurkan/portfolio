import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from 'three';

// KHR_materials_pbrSpecularGlossiness was removed in three.js r140+.
// Register a minimal no-op handler so GLTFLoader doesn't log an unknown extension warning.
function extendLoader(loader) {
  loader.register(() => ({
    name: 'KHR_materials_pbrSpecularGlossiness',
    getMaterialType() { return MeshStandardMaterial; },
    extendMaterialParams() { return Promise.resolve(); },
  }));
}

function PhoneModel({ ...props }) {
  const { nodes, materials } = useGLTF('/phone3.glb', false, false, extendLoader);
  const phoneRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    phoneRef.current.rotation.z = elapsed / 4;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={phoneRef} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
      </group>
    </group>
  );
}

useGLTF.preload('/phone3.glb', false, false, extendLoader);

export default PhoneModel;
