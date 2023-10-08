import React, { ReactNode } from "react";
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  height: 80px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.secondary};
`
interface Props {
  children: React.ReactNode,
  index: number
}
const ListViewItemContainer: React.FC<Props> = ({children}) => {

return (
  <Container>
    {children}
  </Container>
)

}


export default ListViewItemContainer
