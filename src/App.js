import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import ClothDetails from "./components/ClothDetails";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQs from "./components/FAQs";
import ShoppingCart from "./components/ShoppingCart";
import Profile from "./components/Profile";
import About from "./components/About";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/woman" element={<ClothDetails />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
