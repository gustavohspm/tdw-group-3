import React from 'react';
import { useShoppingCart } from '../globalComponents/ShoppingCartContext';
import Navbar from '../globalComponents/NavBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%; /* Ocupa 100% da largura */
  margin: auto; /* Centraliza o conteúdo */
`;

const ItemContainer = styled.div`
  width: 48%; /* Ocupa metade da largura */
  margin-bottom: 20px;
  margin-top: 80px;
  @media (max-width: 768px) {
    width: 100%; /* Em telas pequenas, ocupa 100% da largura */
  }
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  margin-top: 80px;
  font-size: 18px;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 48%; /* Ocupa metade da largura */
  margin-top: 120px;
  @media (max-width: 768px) {
    width: 100%; /* Em telas pequenas, ocupa 100% da largura */
  }
`;

const ContinueButton = styled(Button)`
  margin-top: 20px;
  background-color: #a7c7d9;
  color: #000;
  border: none;
  font-weight: bold;
  position: relative; /* Posição relativa por padrão */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura em telas pequenas */
    position: fixed; /* Fixo apenas em telas pequenas */
    bottom: 0;
    right: 0;
    background-color: #a7c7d9;
    color: #000;
    border: none;
    font-weight: bold;
  }
`;

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
      <CartContainer>
        {cart.length === 0 ? (
          <EmptyCartMessage>Seu carrinho está vazio :(</EmptyCartMessage>
        ) : (
          <>
            <ItemContainer>
              <h3>CARRINHO</h3>
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
                      <span>{item.quantity}</span>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        <FaTrash />
                      </button>
                      <button onClick={() => handleDecreaseQuantity(item.id)}>
                        -
                      </button>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <ContinueButton variant="primary">Continuar</ContinueButton>
            </ItemContainer>
            <TextContainer>
              <p>
                DETAILS Description A prime example of exquisite Italian
                craftmanship, the tailored cut of this double-breasted wool
                blazer by Lemon W is complemented by classic notched lapels.
                Spun from rich wool fibres, a slightly cropped silhouette - and
                a triangle logo on the back put a twist on its traditional
                allure. Made in: Italy Brand color: A7C7D9 LIGHT BLUE Highlights
                black wool tailored design notched lapels double-breasted button
                fastening long sleeves buttoned cuffs two front jetted pockets
                straight hem cropped Brand style ID: UGM257SOOO11A6
              </p>
            </TextContainer>
          </>
        )}
      </CartContainer>
    </div>
  );
};

export default ShoppingCart;
