import { ThemeProvider } from "styled-components"

import { BrowserRouter } from "react-router-dom"

import { CartProvider } from "./hooks/cart"

import {defaultTheme} from './styles/theme/default'
import { GlobalStyle } from "./styles/global"

import { Router } from "./routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <BrowserRouter>
        <CartProvider>

          <Router />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
