import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageButton from "./LanguageButton";
import en from "./languages/en.json";
import es from "./languages/es.json";
import pt from "./languages/pt.json";
import { NavContainer } from "./styles";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState(en);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 810);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContainer>
      {isMobile ? (
        <div>
          <button>☰ Menu</button>
          <ul>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navbar-item">
              <LanguageButton setLanguage={setLanguage} />
            </li>
          </ul>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/">Womens</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Kids</Link>
          </li>
          <li>
            <Link to="/">Brands</Link>
          </li>
          <li>
            <Link className="logo-text" to="/">Leafeel</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">My Account</Link>
          </li>
          <li>
            <Link to="/faqs">FAQ</Link>
          </li>
          <li className="navbar-item">
            <LanguageButton setLanguage={setLanguage} />
          </li>
        </ul>
      )}
    </NavContainer>
  );
};

export default NavBar;
