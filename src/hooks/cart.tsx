import { ReactNode, createContext, useCallback, useContext, useState } from "react";

import { produce } from 'immer';

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

  // FUNCTIONS
  const addCoffeeToCart = useCallback((coffee: ICoffee) => {
    const itemCartIndex = items.findIndex(item => item.id === coffee.id);

    const newItemCart = produce(items, draft => {
      if (itemCartIndex < 0) {
        draft.push(coffee);
      } else {
        const currentQuantity = draft[itemCartIndex].quantity;
        const newQuantity = currentQuantity + coffee.quantity;

        draft[itemCartIndex].quantity = newQuantity;
      }
    });

    setItems(newItemCart);
  }, [items])
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