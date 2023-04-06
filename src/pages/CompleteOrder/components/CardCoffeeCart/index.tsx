import { useCallback, useMemo } from "react";

import { useCart  } from "../../../../hooks/cart";

import { Trash } from "phosphor-react";

import { formatMoney } from "../../../../utils/Utils";

import { QuantityInput } from "../../../../components/QuantityInput";

import { ActionsContainer, CardCoffeeCartContainer, RemoveButton, Text } from "./styles";

interface ICoffee {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number,
  price_formatted: string;
  quantity: number;
}

interface ICardCoffeeCartProps {
  coffee: ICoffee;
}

const CardCoffeeCart = ({ coffee }: ICardCoffeeCartProps) => {
  const { changeItemCartQuantity, removeItemCart } = useCart();
  
  const totalPrice = useMemo(() => {
    const total = coffee.price * coffee.quantity;

    return formatMoney(total);
  }, [coffee])

  // FUNCTIONS
  const handleIncreaseItem = useCallback((coffeeId: number) => {
    changeItemCartQuantity(coffeeId, 'increase');
  }, [changeItemCartQuantity]);

  const handleDecreaseItem = useCallback((coffeeId: number) => {
    changeItemCartQuantity(coffeeId, 'decrease');
  }, [changeItemCartQuantity]);

  const handleRemoveItem = useCallback((coffeeId: number) => {
    removeItemCart(coffeeId);
  }, [removeItemCart]);
  // END FUNCTIONS

  return (
    <CardCoffeeCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />

        <div>
          <Text>{coffee.name}</Text>

          <ActionsContainer>
            <QuantityInput 
              size="small" 
              quantity={coffee.quantity}
              onIncreaseQuantity={() => { handleIncreaseItem(coffee.id)} }
              onDecreaseQuantity={() => { handleDecreaseItem(coffee.id)} }
            />

            <RemoveButton onClick={() => {
              handleRemoveItem(coffee.id);
            }}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {totalPrice}</p>
    </CardCoffeeCartContainer>
  )
}

export { CardCoffeeCart };