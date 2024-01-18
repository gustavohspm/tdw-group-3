import React from 'react';
import { useShoppingCart } from '../globalComponents/ShoppingCartContext';
import Navbar from '../globalComponents/NavBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'react-bootstrap'; // Importe o componente do Bootstrap

const ShoppingCart = () => {
  const { cart, addItem, removeItem, decreaseItemQuantity } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      addItem(item, 1);
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseItemQuantity(itemId);
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ marginTop: '80px' }}>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '50px' }}
              />
              {item.title} - {item.color}, {item.size} - €{item.price}
            </div>
            <div>
              {/* Botão de contagem personalizado */}
              <span>{item.quantity}</span>
              {/* <Button
                variant="outline-secondary"
                disabled
                style={{ width: '30px' }}
              >

              </Button> */}
              {/* Botão de remover com ícone de lixeira */}
              <button onClick={() => handleRemoveItem(item.id)}>
                <FaTrash />
              </button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
