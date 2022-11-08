import React from 'react';
import { useGLTF } from '@react-three/drei'

function PhoneModel({...props}) {
    const { nodes, materials } = useGLTF('/phone3.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/phone3.glb')

export default PhoneModel