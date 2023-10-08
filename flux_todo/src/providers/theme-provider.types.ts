export interface ThemeInterface {
  colors: ColorsInterface
  fonts: FontsInterface
}
export interface ThemeProviderInterface {}

interface ColorsInterface {
  primary: string
  secondary: string
  textColor: string
  backgroundColor: string
  white: string
  black: string
  grey: string
  lightGrey: string
  lightGrey2: string
  error: string
}

interface FontsInterface {
  primary: string
}
