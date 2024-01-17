import React from 'react';
import Navbar from '../globalComponents/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ClothCard from '../globalComponents/ClothCard';
import productsData from '../globalComponents/products/products.json';

const ClothDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="products-heading">
        <h1 className="heading-title">Produtos</h1>
        <ClothCard products={productsData} />
      </div>
    </div>
  );
};

export default ClothDetails;
