// SplashScreen.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Carousel from "../globalComponents/Carousel";
import LanguageButton from "../globalComponents/LanguageButton";
import en from "../globalComponents/languages/en.json";
import es from "../globalComponents/languages/es.json";
import pt from "../globalComponents/languages/pt.json";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  // background: #fff;
  // padding: 20px;
  // border-radius: 8px;
  // max-width: 400px;
  // width: 100%;
  // text-align: center;
  // position: relative;

  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 70vw;
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
`;

const SplashScreen = ({ onClose }) => {
  const [language, setLanguage] = useState(en);
  const images = [
    {
      url: "https://picsum.photos/200/300?random=1",
      title: language.splashScreen.firstImageTitle,
      description: language.splashScreen.firstImageDescription,
    },
    {
      url: "https://picsum.photos/200/300?random=2",
      title: "Imagem 2",
      description: "Descrição da Imagem 2",
    },
    {
      url: "https://picsum.photos/200/300?random=3",
      title: "Imagem 3",
      description: "Descrição da Imagem 3",
    },
  ];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="d-flex justify-content-center flex-column mb-1">
          {" "}
          <span className="logo-font-text large-text-size text-center">
            Leafeel
          </span>{" "}
          <LanguageButton setLanguage={setLanguage} />
        </div>
        <Carousel images={images} />
      </ModalContent>
    </ModalOverlay>
  );
};

SplashScreen.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SplashScreen;
