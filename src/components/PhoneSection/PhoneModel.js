import React,{useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

function PhoneModel({...props}) {
    const { nodes, materials } = useGLTF('/phone3.glb');
    const phoneRef=useRef();

  useFrame(({clock})=>{
    const elapsedTime=clock.getElapsedTime();
    phoneRef.current.rotation.z=elapsedTime / 4;
  })
  return (
    <group {...props} dispose={null}>
      <group ref={phoneRef} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh  geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/phone3.glb')

export default PhoneModel