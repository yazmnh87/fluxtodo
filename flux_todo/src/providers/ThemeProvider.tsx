import React, {useState, PropsWithChildren} from 'react'
import {ThemeProvider} from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Theme: React.FC<Props> = ({children}) => {
  const [themeColor, setThemeColor] = useState(false)
  const [state, setState] = useState({
    theme: {
      colors: {
        primary: '#251f53',
        secondary: '#65f970',
        textColor: '#2e88f7',
        backgroundColor: !themeColor ? '#ffffff' : '#000000',
        white: '#ffffff',
        black: '#000000',
        grey: '#909090',
        lightGrey: '#dddde2',
        lightGrey2: '#f2f2f7',
        error: '#cc0000',
      },
      fonts: {
        primary: 'Helvetica',
      },
    },
  })

  return <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
}

export default Theme
