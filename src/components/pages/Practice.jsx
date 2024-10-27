import React from 'react'
import Box from '../models/Box'
import { Canvas } from '@react-three/fiber'

const Practice = () => {
  return (
    <Canvas 
    className='w-full h-screen bg-transparent '
    camera={{near:0.1,far:1000}}
    > 
    <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <pointLight/>
          {/* <spotLight/> */}
          <hemisphereLight skyColor='b1e1ff' groundColor='#000000' intensity={1}/>
    <Box/>
    </Canvas> 
  )
}

export default Practice