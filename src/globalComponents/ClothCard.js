import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from './CardDetails';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

const ClothCard = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-2 col-6" key={product.id}>
          <LinkContainer
            to={`/product/${product.id}`}
            className="position-relative d-block"
          >
            <CardDetails
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              brand={product.brand}
            />
          </LinkContainer>
        </div>
      ))}
    </div>
  );
};

ClothCard.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ClothCard;
