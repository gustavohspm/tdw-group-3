import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const Title = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  margin: 0;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Description = styled.p`
  color: white;
  margin: 10px;
  text-align: center;
`;

const NavButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.active ? "#fff" : "#999")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const Carousel = ({ images, autoPlay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        const newIndex =
          currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, autoPlay]);

  const nextSlide = () => {
    const newIndex =
      currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <CarouselContainer>
      <ImageWrapper>
        {images.length > 0 && (
          <>
            {images[currentImageIndex].title && (
              <Title>{images[currentImageIndex].title}</Title>
            )}
            <Image
              src={images[currentImageIndex].url}
              alt={`Slide ${currentImageIndex + 1}`}
            />
            {images[currentImageIndex].description && (
              <DescriptionWrapper>
                <Description>
                  {images[currentImageIndex].description}
                </Description>
              </DescriptionWrapper>
            )}
            <NavButtons>
              <NavButton onClick={prevSlide}>&lt;</NavButton>
              <NavButton onClick={nextSlide}>&gt;</NavButton>
            </NavButtons>
          </>
        )}
      </ImageWrapper>
      {images.length > 1 && (
        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentImageIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      )}
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
};

Carousel.defaultProps = {
  autoPlay: false,
};

export default Carousel;
