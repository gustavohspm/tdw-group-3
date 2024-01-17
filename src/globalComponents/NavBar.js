import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuHamburguerButton from "./MenuHamburguerButton";
import NavBarItems from "./NavBarItems";
import LanguageButton from "./LanguageButton";

import blackLogo from "../assets/leafeel_black.png";
import { FaSearch } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import ShoppingCart from "../assets/shoppingcart.svg";
import Star from "../assets/star.svg";
import Profile from "../assets/user.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #ffffff;
`;

const Logo = styled.div`
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 810px) {
    opacity: ${(props) => (props.visible ? "1" : "0")};
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 810px) {
    display: block;
    order: -1;
    margin-top: 1rem;
  }
`;

const NavElements = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 60px;
    background-color: var(--white-palette-color);
    width: ${({ isOpen }) => (isOpen ? "270px" : "0px")};
    height: 100vh;
    transition: width 0.3s ease-in;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding-top: 2rem;
  }
`;

const NavLinkItem = styled.li`
  list-style: none;
  margin: 10px;

  @media (min-width: 900px) {
    margin: 0;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 810px) {
    order: -1;
  }
`;

const SearchIcon = styled(FaSearch)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  position: absolute;
  right: 0;
  width: ${(props) => (props.visible ? "180px" : "0")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition:
    width 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  border-radius: 24px;
  outline: none;
  cursor: text;

    @media (max-width: 810px) {
    right: auto;
    left: 0;
  }
`;

const IconSvg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

const IconShopSvg = styled.img`
  width: 1.6em;
  height: 1.6em;
  cursor: pointer;
`;

const IconProfileSvg = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: var(--black-palette-color);
  text-decoration: none;
`;

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeCategory, setActiveCategory] = useState(null);
  const navRef = useRef();
  const menuIconRef = useRef();
  const searchRef = useRef(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const { language } = useLanguage();

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  const categories = [
    {
      name: language.menu.woman.header,
      disabled: false,
      path: "/woman",
      subcategories: [
        { name: language.menu.woman.item0, path: "" },
        { name: language.menu.woman.item1, path: "/trousers" },
        { name: language.menu.woman.item2, path: "/dresses" },
        { name: language.menu.woman.item3, path: "/shoes" },
        { name: language.menu.woman.item4, path: "/bags" },
        { name: language.menu.woman.item5, path: "/blouses" },
        { name: language.menu.woman.item6, path: "/coats" },
      ],
    },

    // {
    //   name: language.menu.certifications.header,
    //   disabled: false,
    //   subcategories: [
    //     { name: language.menu.certifications.item1, path: "/organic" },
    //     { name: language.menu.certifications.item2, path: "/fairtrade" },
    //     { name: language.menu.certifications.item3, path: "/resources" },
    //     { name: language.menu.certifications.item3, path: "/work-conditions" },
    //     { name: language.menu.certifications.item4, path: "/animal-welfare" },
    //   ],
    // },
    {
      name: language.menu.man.header,
      disabled: true,
    },
    {
      name: language.menu.kids.header,
      disabled: true,
    },
    {
      name: language.menu.brands.header,
      disabled: false,
      path: "/brands",
      subcategories: [
        { name: "AAAAAA", path: "/aaaaaa" },
        { name: "BBBBBB", path: "/bbbbbb" },
        { name: "CCCCCC", path: "/cccccc" },
        { name: "DDDDDD", path: "/dddddd" },
        { name: "EEEEEE", path: "/eeeeee" },
        { name: "FFFFFF", path: "/ffffff" },
      ],
    },
  ];

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target) &&
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setShowNavbar(false);
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 810) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Link to="/">
        <Logo className="px-4" visible={!searchVisible}>
          <img src={blackLogo} style={{ width: "8rem" }} />
        </Logo>
      </Link>
      <div className="d-flex align-items-center order-first">
        <MenuIcon ref={menuIconRef} onClick={handleShowNavbar}>
          <MenuHamburguerButton
            isMenuOpen={showNavbar}
            toggleMenu={handleShowNavbar}
          />
        </MenuIcon>
        {window.innerWidth < 810 && (
          <SearchContainer ref={searchRef} className="px-1">
            <SearchIcon onClick={toggleSearch} />
            <SearchInput
              type="text"
              placeholder={language.globalTexts.search}
              // onChange={handleSearch}
              visible={searchVisible}
            />
          </SearchContainer>
        )}
      </div>

      <NavElements isOpen={showNavbar} ref={navRef} className="">
        <NavBarItems
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isMenuOpen={showNavbar}
        />
        <NavLinkItem
          style={{
            paddingLeft: window.innerWidth < 810 ? "1.4rem" : "0",
          }}
        >
          <LanguageButton />
        </NavLinkItem>
      </NavElements>
      <div className="d-flex align-items-center justify-content-around">
        {window.innerWidth > 810 && (
          <SearchContainer ref={searchRef} className="px-3">
            <SearchIcon onClick={toggleSearch} />
            <SearchInput
              type="text"
              placeholder={language.globalTexts.search}
              // onChange={handleSearch}
              visible={searchVisible}
            />
          </SearchContainer>
        )}
        <StyledLink to="#" className="px-3">
          <IconSvg src={ Star } />
        </StyledLink>
        <StyledLink
          to="#"
          className={window.innerWidth > 810 ? "px-3" : "ps-3"}
        >
          <IconShopSvg src={ ShoppingCart } />
        </StyledLink>
        {window.innerWidth > 810 && (
          <StyledLink to="#" className="ps-3 pe-4">
            <IconProfileSvg src={ Profile } />
          </StyledLink>
        )}
      </div>
    </Container>
  );
};

export default NavBar;

