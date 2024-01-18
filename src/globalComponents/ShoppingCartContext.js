import React, { createContext, useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Se o item já estiver no carrinho, apenas aumente a quantidade
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      } else {
        // Caso contrário, adicione um novo item ao carrinho
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const increaseItemQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const decreaseItemQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          if (item.quantity <= 1) {
            // Se a quantidade do item for 1 ou menos, remova o item
            removeItem(itemId);
            return item;
          } else {
            // Caso contrário, diminua a quantidade
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  const value = {
    cart,
    addItem,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      'useShoppingCart deve ser usado dentro de um ShoppingCartProvider',
    );
  }
  return context;
};
