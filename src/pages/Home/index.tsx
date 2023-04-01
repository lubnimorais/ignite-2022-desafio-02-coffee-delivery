import { Highlight } from "./components/Hightligth"
import { ListCoffees } from "./components/ListCoffees"
import { HomeContainer } from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <Highlight />
      <ListCoffees />
    </HomeContainer>
  )
}

export { Home }