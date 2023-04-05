import { ReactNode, createContext, useCallback, useContext, useState } from "react";

import { produce } from 'immer';

interface ICoffee  {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number,
  price_formatted: string;
  quantity: number;
}

interface ICartContextData {
  items: ICoffee[];
  addCoffeeToCart: (coffee: ICoffee) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextData);

const CartProvider = ({ children }: ICartProviderProps) => {
  const [items, setItems] = useState<ICoffee[]>([]);
  console.log("🚀 ~ file: cart.tsx:29 ~ CartProvider ~ items:", items)

  // FUNCTIONS
  const addCoffeeToCart = useCallback((coffee: ICoffee) => {
    const coffeeAlreadyAddedInCartIndex = items.findIndex(item => item.id === coffee.id);

    const newItemCart = produce(items, draft => {
      if (coffeeAlreadyAddedInCartIndex < 0) {
        draft.push(coffee);
      } else {
        // TODO - refer lógica
        draft[coffeeAlreadyAddedInCartIndex].quantity += coffee.quantity;
      }
    });

    setItems(newItemCart);
  }, [])
  // END FUNCTIONS

  return (
    <CartContext.Provider value={{ items, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(): ICartContextData {
  const context = useContext(CartContext);

  if (!context) {
    alert('CartProvider is required!')
  }

  return context;
}

export { CartProvider, useCart };