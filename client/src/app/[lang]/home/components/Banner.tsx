'use client'

import { Canvas } from '@react-three/fiber'

import BannerScene from './BannerScene'

const Banner = () => (
  <section className="h-[80vh]">
    <Canvas>
      <BannerScene />
    </Canvas>
  </section>
)

export default Banner
