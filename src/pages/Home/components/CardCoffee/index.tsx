import { useCallback, useState } from "react";

import { useCart } from "../../../../hooks/cart";

import { ShoppingCart } from "phosphor-react"

import { QuantityInput } from "../../../../components/QuantityInput"

interface ICoffee {
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
} from "./styles";



const CardCoffee = ({ coffee }: ICardCoffeeProps) => {
  const { addCoffeeToCart } = useCart();

  // STATES
  const [quantity, setQuantity] = useState(1);
  // END STATES

  // FUNCTION
  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(oldState => oldState + 1);
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity(oldState => {
      const resultQuantity = oldState - 1;

      if (resultQuantity === 0) {
        return 1;
      }

      return resultQuantity;

    });
  }, []);

  const handleAddCoffeeToCart = useCallback((coffee: ICoffee) => {
    const coffeeData = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeData);
  }, [quantity, addCoffeeToCart]);
  // END FUNCTION

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
          <QuantityInput
            quantity={quantity}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />

          <button onClick={() => {
            handleAddCoffeeToCart(coffee)
          }}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartContainer>
      </CardCoffeeFooter>
    </CardCoffeeContainer>
  )
}

export { CardCoffee }