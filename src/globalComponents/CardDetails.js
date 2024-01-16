import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const CardDetails = ({ title, image, price, brand }) => {
  const [favorited, setFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <div
      className="card card-hover mb-4 rounded-0 border-0 custom-card"
      style={{ maxWidth: '300px', height: '350px' }}
    >
      <img
        src={image}
        alt={title}
        className="card-img-top rounded-0 custom-image"
      />
      <div className="card-body">
        <p className="card-text">€ {price} </p>
        <h6 className="card-title">
          {title} | {brand}
        </h6>
      </div>
      <div className="card-body">
        <div
          className={`favorite-star ${favorited ? 'favorited' : ''}`}
          onClick={handleToggleFavorite}
        >
          <i className="bi bi-star" />
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
};

export default CardDetails;
