import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from './CardDetails';

const ClothCard = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 col-6" key={product.id}>
          <CardDetails
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            brand={product.brand}
            sustainableData={product.sustainableData || null}
          />
        </div>
      ))}
    </div>
  );
};

ClothCard.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ClothCard;
