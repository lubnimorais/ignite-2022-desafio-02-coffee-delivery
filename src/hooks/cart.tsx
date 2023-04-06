import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

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
  totalItemsCartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: ICoffee) => void;
  changeItemCartQuantity: (itemId: number, type: 'increase' | 'decrease') => void;
  removeItemCart: (itemId: number) => void;
  cleanCart: () => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextData);

const CartProvider = ({ children }: ICartProviderProps) => {
  const [items, setItems] = useState<ICoffee[]>(() => {
    const storedItems = localStorage.getItem('@coffee_delivery:cartItems')

    if (storedItems) {
      return JSON.parse(storedItems);
    }

    return [];
  });

  // @coffee_delivery:cartItems

  const totalItemsCartQuantity = items.length;

  const cartItemsTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

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

  const changeItemCartQuantity = useCallback((itemId: number, type: 'increase' | 'decrease') => {
    const newCart = produce(items, draft => {
      const coffeeExistsIndex = draft.findIndex(item => item.id === itemId);

      if (coffeeExistsIndex >= 0) {
        const item = draft[coffeeExistsIndex];

        draft[coffeeExistsIndex].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setItems(newCart);
  }, [items])

  const removeItemCart = useCallback((itemId: number) => {
    const removedItemCart = produce(items, draft => {
      const coffeeExistsIndex = draft.findIndex(item => item.id === itemId);

      if (coffeeExistsIndex >= 0) {
        draft.splice(coffeeExistsIndex, 1);
      }
    });

    setItems(removedItemCart);
  }, [items]);

  const cleanCart = useCallback(() => {
    setItems([]);
  }, [])
  // END FUNCTIONS

  useEffect(() => {
    localStorage.setItem('@coffee_delivery:cartItems', JSON.stringify(items));
  }, [items])

  return (
    <CartContext.Provider value={{ 
      items, 
      totalItemsCartQuantity, 
      cartItemsTotal,
      addCoffeeToCart, 
      changeItemCartQuantity,
      removeItemCart,
      cleanCart,
    }}>
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