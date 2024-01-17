import React, { useState, useEffect } from "react";
import Navbar from "../globalComponents/NavBar";
import Carousel from "../globalComponents/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";
import SplashScreen from "./SplashScreen";

const Home = () => {
  const images = [
    {
      url: "https://picsum.photos/200/300?random=1",
      title: "Imagem 1",
      description: "Descrição da Imagem 1",
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
    {
      url: "https://picsum.photos/200/300?random=4",
      title: "Imagem 4",
      description: "Descrição da Imagem 4",
    },
    {
      url: "https://picsum.photos/200/300?random=5",
      title: "Imagem 5",
      description: "Descrição da Imagem 5",
    },
  ];

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const seenSplashScreen = Cookies.get("SeenSplashScreen");

    if (seenSplashScreen) {
      setShowSplashScreen(false);
    }
  }, []);

  const handleCloseModal = () => {
    Cookies.set("SeenSplashScreen", "true", { expires: 7 });
    setShowSplashScreen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-5">
        <h1>Bem-vindo à página inicial!</h1>
        {showSplashScreen && <SplashScreen onClose={handleCloseModal} />}
        <div className="mb-4">
          <Carousel images={images} autoPlay={true} />
        </div>
        <div className="mb-4">
          <Carousel images={images} autoPlay={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
