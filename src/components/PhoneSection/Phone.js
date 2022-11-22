import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/phone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={12.08}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.04, 0, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Matt_Black_Plastic} />
          </group>
          <group position={[0.04, 0, 0]} scale={[1, 3, 1]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Silver} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Matt} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.Matt_Black_Plastic} />
          </group>
          <group position={[0.06, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.42}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Matt_Black_Plastic} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Phone_color} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Glass} />
          </group>
          <group position={[0.06, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.74}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Black_Screen} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Phone_color} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.Matt_Black_Plastic} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.Glass} />
          </group>
          <group position={[0.05, 0.14, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={1.35}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.05, 0.14, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={1.35}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.material} />
          </group>
          <group position={[0.05, 0.12, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[2.7, 1.35, 2.7]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.Phone_color} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.Plastic_Glass} />
          </group>
          <group position={[0.05, 0.13, 0]} scale={[1.05, 1.14, 1.14]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.04, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.28}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.Matt_Black_Plastic} />
          </group>
          <group position={[0.03, 0.16, 0]}>
            <mesh geometry={nodes.Object_32.geometry} material={materials.Matt_Black_Plastic} />
          </group>
          <group position={[0.02, 0, 0]} scale={[0.95, 1, 0.95]}>
            <mesh geometry={nodes.Object_34.geometry} material={materials.Matt_Black_Plastic} />
          </group>
          <group position={[0.04, 0.08, 0]} scale={[0.99, 1, 1]}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.07, 0.1, 0]} scale={[1, 1.03, 1]}>
            <mesh geometry={nodes.Object_38.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.04, 0.08, 0]} scale={[0.99, 1, 1]}>
            <mesh geometry={nodes.Object_40.geometry} material={materials.Rubber} />
          </group>
          <group position={[0.04, 0.08, 0]}>
            <mesh geometry={nodes.Object_42.geometry} material={materials.Phone_color} />
            <mesh geometry={nodes.Object_43.geometry} material={materials.Black_Screen} />
          </group>
          <group position={[0.02, 0.16, 0]} scale={[1, 1, 0.71]}>
            <mesh geometry={nodes.Object_45.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.06, 0.14, 0]} scale={0}>
            <mesh geometry={nodes.Object_47.geometry} material={materials.Lems} />
          </group>
          <group position={[0.06, 0.14, 0]} scale={0}>
            <mesh geometry={nodes.Object_49.geometry} material={materials.Lems} />
          </group>
          <group position={[0.05, 0.13, 0]} scale={0}>
            <mesh geometry={nodes.Object_51.geometry} material={materials.Lems} />
          </group>
          <group position={[0.05, 0.13, 0]} scale={0}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Lems} />
          </group>
          <group position={[0.06, 0.13, 0]} scale={0}>
            <mesh geometry={nodes.Object_55.geometry} material={materials.Lems} />
          </group>
          <group position={[0.06, 0.13, 0]} scale={0}>
            <mesh geometry={nodes.Object_57.geometry} material={materials.Lems} />
          </group>
          <group position={[0, 0.11, 0]}>
            <mesh geometry={nodes.Object_59.geometry} material={materials.Phone_color} />
          </group>
          <group position={[0.05, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.42}>
            <mesh geometry={nodes.Object_61.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.Matt_Black_Plastic} />
            <mesh geometry={nodes.Object_63.geometry} material={materials.Phone_color} />
            <mesh geometry={nodes.Object_64.geometry} material={materials.Glass} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/phone.glb')
