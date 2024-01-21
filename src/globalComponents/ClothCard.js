import React from "react";
import PropTypes from "prop-types";
import CardDetails from "./CardDetails";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ClothCard = ({ products }) => {
  return (
    <div className="row mt-5">
      <h3 className="d-flex justify-content-center mb-4">PRODUTOS</h3>
      {products.map((product) => (
        <div
          className="col-md-3 col-6 d-flex justify-content-center align-items-center"
          key={product.id}
        >
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
