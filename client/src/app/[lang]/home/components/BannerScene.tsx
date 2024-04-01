'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const BannerScene = () => {
  const group = useRef(null)
  const gltf = useLoader(GLTFLoader, './banner.glb')

  return (
    <>
      <primitive ref={group} object={gltf.scene} position={[0, -1.5, 0]} />
      <OrbitControls
      // minAzimuthAngle={-Math.PI / 8}
      // maxAzimuthAngle={Math.PI / 8}
      // minPolarAngle={0}
      // maxPolarAngle={0}
      />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <Environment preset="apartment" background blur={0.1} />
      {/*<Stats />*/}
    </>
  )
}

export default BannerScene
