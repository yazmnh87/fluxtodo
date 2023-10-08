import React from 'react'
import styled from 'styled-components/native'
import _Icon from 'react-native-vector-icons/Ionicons'

interface IconProps {
  name: string,
  size: number,
  color: string,
  onPress: () => void
}
const Icon = ({ name, size, color, onPress }: IconProps) => {

  return (
    <_Icon
    name={name}
    size={size}
    color={color}
    onPress={() => onPress()}
    />
  )

}


export default Icon
