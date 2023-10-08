import {SafeAreaView} from 'react-native'
import styled from 'styled-components/native'

const BaseSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`

export default BaseSafeAreaView
