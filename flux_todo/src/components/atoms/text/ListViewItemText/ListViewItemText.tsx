import React from 'react'
import styled from 'styled-components/native'


const StyledText = styled.Text`
  width: 100%;
  font-size: 20px;
  color: #333333;
  border: 1px solid red;
`
interface Props {
  children: string
}

const ListViewItemText: React.FC<Props> = ({children}) => {
  return (
    <StyledText>
      {children}
    </StyledText>
  )
}


export default ListViewItemText
