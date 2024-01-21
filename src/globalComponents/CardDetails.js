import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import "../App.css";
import PieGraphics from "./PieGraphics";
import { FaTimes } from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  max-width: 60vw;
  width: 100%;
  text-align: center;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 810px) {
    max-width: 90vw;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

const CardDetails = ({ id, title, image, price, brand, sustainableData }) => {
  const [favorited, setFavorited] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleFavorite = () => {
    setFavorited(!favorited);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="card card-hover mb-4 rounded-0 border-0 custom-card"
      style={{ maxWidth: "300px", height: "350px" }}
    >
      <LinkContainer
        to={`/product/${id}`}
        className="position-relative d-block"
      >
        <img
          src={image}
          alt={title}
          className="card-img-top rounded-0 custom-image"
        />
      </LinkContainer>
      <div className="card-body row d-flex justify-content-between">
        <div className="col-lg-6 col-sm-12">
          <p className="card-text">€ {price} </p>
          <h6 className="card-title">
            {title} | {brand}
          </h6>
        </div>
        <div className="col-lg-6 col-sm-12">
          {sustainableData && (
            <button
              onClick={() => setModalOpen(true)}
              className="border-0 bg-transparent"
            >
              <PieGraphics sustainableData={sustainableData} size={32} />
            </button>
          )}
        </div>
      </div>
      <div className="card-body">
        <div
          className={`favorite-star ${favorited ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
        >
          <i className="bi bi-star" />
        </div>
      </div>
      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={onClose}>
              {" "}
              <FaTimes style={{ fontSize: "xx-large" }} />
            </CloseButton>
            <div className="d-flex justify-content-center flex-column mb-1">
              {" "}
              <h5 className="text-center">
                {title} | {brand}
              </h5>{" "}
              <PieGraphics sustainableData={sustainableData} size={200} />
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

CardDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  sustainableData: PropTypes.any.isRequired,
};

export default CardDetails;
