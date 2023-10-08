import React, { useState } from 'react'
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from "../../menus/menu";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
const Container = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 100%;
  border: 1px solid blue;
`

const StyledIcon = styled(Icon)`
  font-size: 35px;
  font-weight: 700;
  margin-right: 15px;
  color:${props=>props.theme.colors.primary};
  border: 1px solid red;
`

const renderMenu = () => {
  return (
    <Menu />
  )
}

const BottomActionBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <Container>
        <StyledIcon name="settings-outline" onPress={()=> setShowMenu((prevState: boolean) => !prevState)}/>
      {showMenu && renderMenu()}
    </Container>
  )
}

export default BottomActionBar
