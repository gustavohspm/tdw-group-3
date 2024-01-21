import React from "react";
import "./About.css";
import leafeel from "../leafeel_logo_black.png";
import NavBar from "../globalComponents/NavBar";
import Footer from "../globalComponents/Footer";

function About() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <div className="about-container">
          <div className="logo-container">
            <img src={leafeel} alt="Logotipo" className="about-logo" />
          </div>
          <div className="about-text">
            <p>
              We are master’s students in Aveiro’s University.
              <p />
              We are developing a project for the master's degree in
              Communication and Web Technologies. For this project, the team has
              decided to create a digital showcase in the form of a responsive
              website for the sale of sustainable textile products. The goal is
              to support sustainability worldwide. People continue to purchase
              textile products, but in a more conscious and responsible manner.
              Our website aims to raise awareness among users about the
              sustainability of the planet, ensuring that the purchased products
              adhere to sustainability protocols.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
