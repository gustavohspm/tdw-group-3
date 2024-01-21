import React from "react";
import { useShoppingCart } from "../globalComponents/ShoppingCartContext";
import Navbar from "../globalComponents/NavBar";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import PieGraphics from "../globalComponents/PieGraphics";
import chart from "../chart.png";

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
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #a7c7d9;
    color: #000;
    border: none;
    font-weight: bold;
    margin-botton: "inherit";
  }
`;

const ShoppingCart = () => {
  const { cart, addItem, removeItem, decreaseItemQuantity } = useShoppingCart();
  let total = 0;

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    console.log(item);
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
                {cart.map(
                  (item) => (
                    (total += item.price * item.quantity),
                    (
                      <li
                        className="d-flex justify-content-between mb-4"
                        style={{
                          listStyle: "none",
                          borderBottom: "1px solid #E3D3B2",
                        }}
                        key={item.id}
                      >
                        <div className="d-flex flex-column">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "50px" }}
                          />
                          {item.color}, {item.size} - €{item.price}
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-start">
                          <PieGraphics
                            sustainableData={item?.sustainableData}
                            size={32}
                            className="mb-2"
                          />
                          <div className="d-flex align-items-center justify-content-start">
                            <span className="me-4 mt-1">{item.quantity}</span>
                            <button
                              className="border-0 bg-transparent me-2 px-1"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <FaTrash />
                            </button>
                            <button
                              className="border-1 rounded-1 bg-transparent me-2 px-2"
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <button
                              className="border-1 rounded-1 bg-transparent px-2"
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  ),
                )}
              </ul>
              <div className="d-flex justify-content-center">
                Total: {total.toFixed(2)}
              </div>
              <ContinueButton variant="primary">Continuar</ContinueButton>
            </ItemContainer>
            <TextContainer>
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                <img
                  src={chart}
                  alt="Sustainable Clothing Certifications Chart"
                  style={{ maxWidth: "50%", height: "auto" }}
                />
                <span>Média: Leafeel!</span>
              </div>
            </TextContainer>
          </>
        )}
      </CartContainer>
    </div>
  );
};

export default ShoppingCart;
