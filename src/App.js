import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import ClothDetails from './components/ClothDetails';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQs from './components/FAQs';
import ShoppingCart from './components/ShoppingCart';
import { ShoppingCartProvider } from './globalComponents/ShoppingCartContext';

export default function App() {
  return (
    <Router>
      {/* <ShoppingCartProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/woman" element={<ClothDetails />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      {/* </ShoppingCartProvider> */}
    </Router>
  );
}
