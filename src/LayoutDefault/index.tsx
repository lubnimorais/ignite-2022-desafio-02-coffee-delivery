import { Outlet } from "react-router-dom"

import { Header } from "../components/Header"

import { LayoutDefaultContainer } from "./styles"

const LayoutDefault = () => {
  return (
    <LayoutDefaultContainer>
      <Header />

      <Outlet />
    </LayoutDefaultContainer>
  )
}

export { LayoutDefault }