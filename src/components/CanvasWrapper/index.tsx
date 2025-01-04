// @ts-nocheck
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion, Variants } from 'framer-motion'
import { Suspense } from 'react'

export const CanvasWrapper = ({
  animation,
  model,
}: {
  animation: Variants
  model: JSX.Element
}) => {
  return (
    <motion.div
      className="h-full basis-96"
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <Canvas camera={{ fov: 10, position: [20, 10, 20] }}>
        <Suspense fallback={null}>{model}</Suspense>
        <OrbitControls
          minPolarAngle={0}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={5}
        />

        <directionalLight position={[-1, 10, 1]} intensity={3} />
      </Canvas>
    </motion.div>
  )
}
