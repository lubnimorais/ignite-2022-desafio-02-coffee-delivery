import { ShoppingCart } from "phosphor-react"

import { QuantityInput } from "../../../../components/QuantityInput"

interface ICoffee  {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number,
  price_formatted: string;
}

interface ICardCoffeeProps {
  coffee: ICoffee;
}

import { 
  CardCoffeeContainer, 
  DescriptionCoffee, 
  CardCoffeeFooter, 
  NameCoffee, 
  Tags, 
  CoffeeSignPrice, 
  CoffeePrice, 
  AddCartContainer 
} from "./styles"



const CardCoffee = ({ coffee }: ICardCoffeeProps) => {
  console.log(coffee.photo);

  return (
    <CardCoffeeContainer>
      <img 
        src={`/coffees/${coffee.photo}`} 
        alt="" 
      />

      <Tags>
        {
          coffee.tags.map(tag => (
            <span key={`${coffee.id}-${tag}`}>{tag}</span>
          ))
        }
      </Tags>

      <NameCoffee>{coffee.name}</NameCoffee>

      <DescriptionCoffee>
        {coffee.description}
      </DescriptionCoffee>

      <CardCoffeeFooter>
        <div>
          <CoffeeSignPrice>R$</CoffeeSignPrice>
          <CoffeePrice>{coffee.price_formatted}</CoffeePrice>
        </div>

        <AddCartContainer>
          <QuantityInput  />

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartContainer>
      </CardCoffeeFooter>
    </CardCoffeeContainer>
  )
}

export { CardCoffee }