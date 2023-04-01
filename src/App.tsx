import { ThemeProvider } from "styled-components"

import { BrowserRouter } from "react-router-dom"

import {defaultTheme} from './styles/theme/default'
import { GlobalStyle } from "./styles/global"
import { Router } from "./routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />

        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
