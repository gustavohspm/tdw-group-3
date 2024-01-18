import React, { useState, useEffect } from 'react';
import Navbar from '../globalComponents/NavBar';
import Carousel from '../globalComponents/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';
import SplashScreen from './SplashScreen';
import Footer from '../globalComponents/Footer';
import firstImage1 from '../assets/carousel1.1.jpeg';
import secondImage1 from '../assets/carousel1.2.jpeg';
import firstImage2 from '../assets/carousel2.1.jpeg';
import secondImage2 from '../assets/carousel.2.2.jpeg';

const Home = () => {
  const imagesFirstCarousel = [
    {
      url: firstImage1,
    },
    {
      url: secondImage1,
    },
  ];

  const imagesSecondCarousel = [
    {
      url: firstImage2,
    },
    {
      url: secondImage2,
    },
  ];

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const seenSplashScreen = Cookies.get('SeenSplashScreen');

    if (seenSplashScreen) {
      setShowSplashScreen(false);
    }
  }, []);

  const handleCloseModal = () => {
    Cookies.set('SeenSplashScreen', 'true', { expires: 30 });
    setShowSplashScreen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-5">
        {showSplashScreen && <SplashScreen onClose={handleCloseModal} />}
        <div className="mb-4">
          <Carousel images={imagesFirstCarousel} autoPlay={true} />
        </div>
        <div className="mb-4">
          <Carousel images={imagesSecondCarousel} autoPlay={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
