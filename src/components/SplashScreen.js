import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Carousel from "../globalComponents/Carousel";
import { FaTimes } from "react-icons/fa";
import en from "../globalComponents/languages/en.json";
import es from "../globalComponents/languages/es.json";
import pt from "../globalComponents/languages/pt.json";

import firstImagePT from "../assets/firstInfoPT.jpeg";
import secondImagePT from "../assets/secondInfoPT.jpeg";
import thirdImagePT from "../assets/thirdInfoPT.jpeg";

import firstImageES from "../assets/firstInfoES.jpeg";
import secondImageES from "../assets/secondInfoES.jpeg";
import thirdImageES from "../assets/thirdInfoES.jpeg";

import firstImageEN from "../assets/firstInfoEN.jpeg";
import secondImageEN from "../assets/secondInfoEN.jpeg";
import thirdImageEN from "../assets/thirdInfoEN.jpeg";

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
  padding: 8px 0 24px 0;
  border-radius: 8px;
  max-width: 70vw;
  //width: 100%;
  text-align: center;
  position: relative;
  //max-height: 80vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

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

const SplashScreen = ({ onClose }) => {
  const [languageKey, setLanguageKey] = useState('pt');
  const [language, setLanguage] = useState(pt);
  const languages = { pt, es, en };

  useEffect(() => {
    setLanguage(languages[languageKey] || pt);
  }, [languageKey]);

  const images = {
    pt: {
      firstImage: firstImagePT,
      secondImage: secondImagePT,
      thirdImage: thirdImagePT,
    },
    es: {
      firstImage: firstImageES,
      secondImage: secondImageES,
      thirdImage: thirdImageES,
    },
    en: {
      firstImage: firstImageEN,
      secondImage: secondImageEN,
      thirdImage: thirdImageEN,
    },
  };
  const currentImages = images[languageKey] || {};

  const carouselImages = [
    { url: currentImages.firstImage },
    { url: currentImages.secondImage },
    { url: currentImages.thirdImage },
  ];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}> <FaTimes style={{fontSize: "xx-large"}}/></CloseButton>
        <div className="d-flex justify-content-center flex-column mb-1">
          <span className="logo-font-text text-center" style={{ fontSize: "32px" }}>
            Leafeel
          </span>
        </div>
        <Carousel images={carouselImages} />
      </ModalContent>
    </ModalOverlay>
  );
};

SplashScreen.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SplashScreen;