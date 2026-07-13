import React, { createContext, useContext, useReducer } from 'react';
const CartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const existing = state.items.find(i => i.product === action.payload.product);
    if (existing) {
      return { ...state, items: state.items.map(i => i.product === action.payload.product ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    return { ...state, items: [...state.items, action.payload] };
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: { product: product._id, name: product.name, price: product.basePrice, image: product.images?.[0], quantity: 1 } });
  const getCartTotal = () => state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getCartCount = () => state.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items: state.items, addToCart, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
