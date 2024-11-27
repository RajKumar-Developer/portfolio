/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 C:\Users\rajk8\OneDrive\Desktop\portfolio\src\3d\final_Room.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/final_Room.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={1.096}>
        <mesh geometry={nodes.chair_form.geometry} material={materials['gaming_chair_progress_uvblinn6.001']} />
        <mesh geometry={nodes.chair_form_1.geometry} material={materials['blinn1.001']} />
        <mesh geometry={nodes.chair_form_2.geometry} material={materials['gaming_chair_progress_uvblinn4.001']} />
      </group>
      <mesh geometry={nodes.leftTableFoot.geometry} material={materials.Black} scale={1.096} />
      <group scale={1.096}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.sidePannel} />
      </group>
      <mesh geometry={nodes.rightTableFoot.geometry} material={materials.Black} scale={1.096} />
      <group scale={1.096}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Material} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.001']} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Plane.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.007']} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Plane001.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.006']} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.003']} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Monitor_Frame} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.002']} />
      </group>
      <group scale={1.096}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.Black} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.012']} />
      </group>
      <mesh geometry={nodes.keyBoard.geometry} material={materials.Monitor_Frame} scale={1.096} />
      <group scale={1.096}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.Monitor_Frame} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.monitorScreen} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials['Material.004']} />
      </group>
      <mesh geometry={nodes.monitorStand.geometry} material={materials.Monitor_Frame} scale={1.096} />
      <mesh geometry={nodes.Wire.geometry} material={materials['Material.013']} scale={1.096} />
      <mesh geometry={nodes.leftHandle.geometry} material={materials['Material.009']} scale={1.096} />
      <mesh geometry={nodes.rightHandle.geometry} material={materials.Black} scale={1.096} />
      <group scale={1.096}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.floor} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.GLASS} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.windowFrame} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials.windowFrame} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials['sky Wall']} />
      </group>
      <mesh geometry={nodes.Shoes.geometry} material={materials.Shoes} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh geometry={nodes.Shirt.geometry} material={materials.Shirt} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh geometry={nodes.Pants.geometry} material={materials.Pants} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh geometry={nodes.hands.geometry} material={materials.hands} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh geometry={nodes.hair.geometry} material={materials.Hair} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh name="Teeth" geometry={nodes.Teeth.geometry} material={materials.Teeth} morphTargetDictionary={nodes.Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Teeth.morphTargetInfluences} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh name="RightEye" geometry={nodes.RightEye.geometry} material={materials.LeftEye} morphTargetDictionary={nodes.RightEye.morphTargetDictionary} morphTargetInfluences={nodes.RightEye.morphTargetInfluences} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <group position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259}>
        <mesh name="MainHead_1" geometry={nodes.MainHead_1.geometry} material={materials['skin.002']} morphTargetDictionary={nodes.MainHead_1.morphTargetDictionary} morphTargetInfluences={nodes.MainHead_1.morphTargetInfluences} />
        <mesh name="MainHead_2" geometry={nodes.MainHead_2.geometry} material={materials['teeth.002']} morphTargetDictionary={nodes.MainHead_2.morphTargetDictionary} morphTargetInfluences={nodes.MainHead_2.morphTargetInfluences} />
      </group>
      <mesh name="LeftEye" geometry={nodes.LeftEye.geometry} material={materials.LeftEye} morphTargetDictionary={nodes.LeftEye.morphTargetDictionary} morphTargetInfluences={nodes.LeftEye.morphTargetInfluences} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
      <mesh name="EyeBrow" geometry={nodes.EyeBrow.geometry} material={materials.Hair} morphTargetDictionary={nodes.EyeBrow.morphTargetDictionary} morphTargetInfluences={nodes.EyeBrow.morphTargetInfluences} position={[0.844, 1.351, 4.128]} rotation={[0, 1.219, 0]} scale={0.259} />
    </group>
  )
}

useGLTF.preload('/final_Room.glb')