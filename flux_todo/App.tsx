import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Theme from './src/providers/ThemeProvider'
import Home from './src/screens/home/index'

function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Home />
      </Theme>
    </QueryClientProvider>
  )
}

export default App
