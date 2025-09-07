import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const {progress} = useProgress()
  return (
    <Html center className='font-normal text-center text-2xl'>{progress}% loaded</Html>
  )
}

export default Loader