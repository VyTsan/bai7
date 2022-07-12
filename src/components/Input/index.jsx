import React from 'react'
import { SInput } from './styles'

const Input = ({ width, height, color }) => {
  return <SInput type='text' width={width} height={height} color={color}/>
}

export default Input