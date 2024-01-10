import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import '../App.css';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const [favorited, setFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <div className="card card-hover mb-4 rounded-0 border-0 custom-card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top rounded-0 custom-image"
      />
      <div className="card-body">
        <p className="card-text">€ {product.price} </p>
        <h6 className="card-title">
          {product.title} | {product.brand}
        </h6>
      </div>
      <div className="card-body">
        <div
          className={`favorite-star ${favorited ? 'favorited' : ''}`}
          onClick={handleToggleFavorite}
        >
          &#9733;
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductDetails;
