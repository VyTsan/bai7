import React from 'react'
import { SButton } from './styles'

const Button = ({ text, color, onClick }) => {
  return <SButton color={color} onClick={onClick}>{text}</SButton>
}

export default Button