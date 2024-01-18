import React from "react";
import { useShoppingCart } from "../globalComponents/ShoppingCartContext";
import Navbar from "../globalComponents/NavBar";
import { FaTrash } from "react-icons/fa";
import PieGraphics from "../globalComponents/PieGraphics";
import AveragePieGraphics from "../globalComponents/AveragePieGraphics";
import chart from "../chart.png";

const ShoppingCart = () => {
  const { cart, addItem, removeItem, decreaseItemQuantity } = useShoppingCart();

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
      <h2 style={{ marginTop: "80px" }}>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "50px" }}
              />
              {item.title} - {item.color}, {item.size} - €{item.price}
              <PieGraphics sustainableData={item?.sustainableData} size={32} />
            </div>
            <div>
              <span>{item.quantity}</span>
              <button onClick={() => handleRemoveItem(item.id)}>
                <FaTrash />
              </button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={chart}
          alt="Sustainable Clothing Certifications Chart"
          style={{ maxWidth: "50%", height: "auto" }}
        />
        <span>Média: Leafeel!</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
