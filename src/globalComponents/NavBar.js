import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuHamburguerButton from "./MenuHamburguerButton";
import NavBarItems from "./NavBarItems";
import LanguageButton from "./LanguageButton";
import en from "../globalComponents/languages/en.json";
import es from "../globalComponents/languages/es.json";
import pt from "../globalComponents/languages/pt.json";
import blackLogo from "../assets/leafeel_black.png";
import { FaSearch, FaStar, FaShoppingCart, FaUser } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import { useLanguage } from "./LanguageContext";

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

const StarIcon = styled(FaStar)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const ShoppingCartIcon = styled(FaShoppingCart)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const ProfileIcon = styled(FaUser)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

// const NavElement = styled(Link)`
//   color: #2f234f;
//   text-decoration: none;
//   font-size: 18px;
//   padding: 10px 0;

//   &:hover {
//     color: #574c4c;
//   }

//   &.active {
//     font-weight: 500;
//     position: relative;

//     &::after {
//       content: "";
//       position: absolute;
//       bottom: -4px;
//       left: 0;
//       width: 100%;
//       height: 2px;
//       background-color: #574c4c;
//     }
//   }
// `;

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
    {
      name: language.menu.certifications.header,
      disabled: false,
      subcategories: [
        { name: language.menu.certifications.item1, path: "/organic" },
        { name: language.menu.certifications.item2, path: "/fairtrade" },
        { name: language.menu.certifications.item3, path: "/resources" },
        { name: language.menu.certifications.item4, path: "/animal-welfare" },
      ],
    },
    {
      name: language.menu.man.header,
      disabled: true,
    },
    {
      name: language.menu.kids.header,
      disabled: true,
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
            paddingLeft: window.innerWidth < 810 ? "2rem" : "0",
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
        <Nav.Link href="#" className="px-3">
          <StarIcon />
        </Nav.Link>
        <Nav.Link
          href="#"
          className={window.innerWidth > 810 ? "px-3" : "ps-3"}
        >
          <ShoppingCartIcon />
        </Nav.Link>
        {window.innerWidth > 810 && (
          <Nav.Link href="#" className="ps-3 pe-4">
            <ProfileIcon />
          </Nav.Link>
        )}
      </div>
    </Container>
  );
};

export default NavBar;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import MenuHamburguerButton from './MenuHamburguerButton';

// const Container = styled.div`
//  display: flex;
//  justify-content: space-between;
//  padding: 0 20px;
// `;

// const Logo = styled.div``;

// const MenuIcon = styled.div`
//  cursor: pointer;
//  display: none;

//  @media (max-width: 810px) {
//    display: block;
//  }
// `;

// const NavElements = styled.div`
//  display: flex;
//  gap: 20px;

//  @media (max-width: 810px) {
//    position: absolute;
//    right: 0;
//    top: 60px;
//    background-color: #fef7e5;
//    width: 0px;
//    height: calc(100vh - 60px);
//    transition: all 0.3s ease-in;
//    overflow: hidden;
//  }

//  &.active {
//    width: 270px;
//  }
// `;

// const NavElement = styled(Link)`
//  color: #2f234f;
//  text-decoration: none;

//  &.active {
//    color: #574c4c;
//    font-weight: 500;
//    position: relative;

//    &::after {
//      content: "";
//      position: absolute;
//      bottom: -4px;
//      left: 0;
//      width: 100%;
//      height: 2px;
//      background-color: #574c4c;
//    }
//  }
// `;

// const NavBar = () => {
//  const [showNavbar, setShowNavbar] = useState(false);

//  const handleShowNavbar = () => {
//    setShowNavbar(!showNavbar);
//  };

//  return (
//    <Container>
//      <Logo>Logo</Logo>
//      <MenuIcon onClick={handleShowNavbar}><MenuHamburguerButton /></MenuIcon>
//      <NavElements className={showNavbar ? 'active' : ''}>
//        <NavElement to="/" activeClassName="active">Home</NavElement>
//        <NavElement to="/blogs" activeClassName="active">Blogs</NavElement>
//        <NavElement to="/projects" activeClassName="active">Projects</NavElement>
//        <NavElement to="/about" activeClassName="active">About</NavElement>
//        <NavElement to="/contact" activeClassName="active">Contact</NavElement>
//      </NavElements>
//    </Container>
//  );
// };

// export default NavBar;

// import React from 'react';
// import styled from 'styled-components';
// import MenuHamburguerButton from './MenuHamburguerButton';

// const NavbarContainer = styled.nav`
//   background-color: white;
//   padding: 10px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 1000;
//   font-family: 'Century Gothic', sans-serif;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

// const Logo = styled.h1`
//   color: #333;
//   margin: 0;
// `;

// const NavBar = () => {
//   return (
//     <NavbarContainer>
//       <Logo>Logo</Logo>
//       <MenuHamburguerButton />
//     </NavbarContainer>
//   );
// };

// export default NavBar;

// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaSearch, FaStar, FaShoppingCart } from 'react-icons/fa';
// const StyledNavbar = styled(Navbar)`
//   background-color: white;
//   font-family: 'Century Gothic', sans-serif;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1;
// `;
// const SearchContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;
// const SearchIcon = styled(FaSearch)`
//   cursor: pointer;
// `;
// const SearchInput = styled.input`
//   position: absolute;
//   right: 0;
//   width: ${props => (props.visible ? '200px' : '0')};
//   opacity: ${props => (props.visible ? '1' : '0')};
//   transition: width 0.5s ease-in-out, opacity 0.5s ease-in-out;
//   border: none;
//   outline: none;
//   cursor: text;
// `;
// const StarIcon = styled(FaStar)`
//   cursor: pointer;
// `;
// const ShoppingCartIcon = styled(FaShoppingCart)`
//   cursor: pointer;
// `;
// const CustomNav = styled(Nav)`
//   .nav-link {
//     display: flex;
//     align-items: center;
//     padding: 0.5rem 1rem;
//   }
// `;
// const CustomDropdown = styled.div`
//   visibility: hidden;
//   opacity: 0;
//   transform: translateY(-100%);
//   transition: visibility 0s, opacity 0.3s linear, transform 0.3s linear;
//   position: absolute;
//   left: 0;
//   width: 30vw;
//   max-width: 100%;
//   background-color: white;
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//   padding: 12px 16px;
//   z-index: 1;
//   top: 54px;
//   &:hover {
//     visibility: visible;
//     opacity: 1;
//     transform: translateY(0);
//   }
//   .dropdown-item {
//     display: block;
//     padding: 0.25rem 1.5rem;
//     clear: both;
//     font-weight: 400;
//     color: #212529;
//     text-align: inherit;
//     white-space: nowrap;
//     background-color: transparent;
//     border: 0;
//     transition: transform 0.3s ease-in-out;
//     &:hover {
//       transform: translateX(10px);
//     }
//   }
// `;
// const NavBar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(null);
//   const searchRef = useRef(null);
//   const dropdownRef = useRef([]);
//   const categories = [
//     { name: 'Categoria 1', subcategories: [{ name: 'Sub 1', path: '/sub1' }, { name: 'Sub 2', path: '/sub2' }] },
//     { name: 'Categoria 2', subcategories: [{ name: 'Sub 3', path: '/sub3' }, { name: 'Sub 4', path: '/sub4' }] },
//   ];
//   const toggleSearch = () => {
//     setSearchVisible(prev => !prev);
//   };
//   const handleClickOutside = event => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setSearchVisible(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
//   return (
//     <div>
//       <StyledNavbar expand="lg">
//         <Navbar.Brand href="#">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <CustomNav className="mr-auto">
//             {categories.map((category, index) => (
//               <Nav.Link key={index} href="#" onMouseEnter={() => setShowDropdown(index)} onMouseLeave={() => setShowDropdown(null)}>
//                 {category.name}
//               </Nav.Link>
//             ))}
//           </CustomNav>
//           <Nav className="ms-auto">
//             <SearchContainer ref={searchRef}>
//               <SearchIcon onClick={toggleSearch} />
//               <SearchInput
//                 type="text"
//                 placeholder="Search"
//                 visible={searchVisible}
//               />
//             </SearchContainer>
//             <Nav.Link href="#"><StarIcon /></Nav.Link>
//             <Nav.Link href="#"><ShoppingCartIcon /></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         </StyledNavbar>
//         {categories.map((category, index) => (
//         <CustomDropdown
//           key={index}
//           ref={el => dropdownRef.current[index] = el}
//           onMouseEnter={() => setShowDropdown(index)}
//           onMouseLeave={() => setShowDropdown(null)}
//           style={{
//             visibility: showDropdown === index ? 'visible' : 'hidden',
//             opacity: showDropdown === index ? 1 : 0,
//             transform: showDropdown === index ? 'translateY(0)' : 'translateY(-100%)'
//           }}
//         >
//           {category.subcategories.map((sub, idx) => (
//             <a key={idx} className="dropdown-item" href={sub.path}>{sub.name}</a>
//           ))}
//         </CustomDropdown>
//       ))}
//     </div>
//   );
// };
// export default NavBar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import LanguageButton from './LanguageButton';
// import en from './languages/en.json';
// import es from './languages/es.json';
// import pt from './languages/pt.json';

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import LanguageButton from './LanguageButton';
// import en from './languages/en.json';
// import es from './languages/es.json';
// import pt from './languages/pt.json';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: white;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

// const MenuButton = styled.button`
//   display: none;
//   font-size: 1.5em;
//   background: none;
//   border: none;
//   color: black;
//   cursor: pointer;

//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   width: 100%;
//   z-index: 1;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     position: absolute;
//     top: 60px;
//     left: 0;
//     background-color: white;
//     transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
//     transition: transform 0.5s ease-in-out;
//     width: 50vw;
//   }
// `;

// const NavLinkItem = styled.li`
//   margin: 10px;

//   @media (min-width: 900px) {
//     margin: 0;
//   }
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2em;
// `;

// const Logo = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2em;
//   font-weight: bold;
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState(en);
//   const toggle = () => setIsOpen(!isOpen);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <Nav>
//       <MenuButton onClick={toggle}>☰ Menu</MenuButton>
//       <NavLinkItem><NavLink to="/">Leafeel</NavLink></NavLinkItem>
//       <Logo to="/cloth-details"></Logo>
//       <NavLinks isOpen={isOpen}>
//         {isOpen && windowWidth > 900 ? (
//           <>
//             <NavLinkItem><NavLink to="/">Categories</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Womens</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Men</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Kids</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Brands</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/about">About</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/faqs">FAQ</NavLink></NavLinkItem>
//             <NavLinkItem><LanguageButton setLanguage={setLanguage} /></NavLinkItem>
//           </>
//         ) :

//             <NavLinkItem><NavLink to="/">Categories</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Womens</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Men</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Kids</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Brands</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/about">About</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/faqs">FAQ</NavLink></NavLinkItem>
//         <NavLinkItem><NavLink to="/profile">My Account</NavLink></NavLinkItem>
//         <NavLinkItem><LanguageButton setLanguage={setLanguage} /></NavLinkItem>
//       }
//       </NavLinks>
//     </Nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import LanguageButton from './LanguageButton';
// import en from './languages/en.json';
// import es from './languages/es.json';
// import pt from './languages/pt.json';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: white;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

// const MenuButton = styled.button`
//   display: none;
//   font-size: 1.5em;
//   background: none;
//   border: none;
//   color: black;
//   cursor: pointer;

//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   width: 100%;
//   z-index: 1;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     position: absolute;
//     top: 60px;
//     left: 0;
//     background-color: white;
//     transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
//     transition: transform 0.5s ease-in-out;
//     width: 50vw;
//   }
// `;

// const NavLinkItem = styled.li`
//   margin: 10px;

//   @media (min-width: 900px) {
//     margin: 0;
//   }
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2em;
// `;

// const Logo = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2em;
//   font-weight: bold;
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState(en);
//   const toggle = () => setIsOpen(!isOpen);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <Nav>
//                     <div  className="col-12 d-flex justify-content-center align-items-center">
//                 <div className="col-4 d-flex justify-content-center">
//                   <MenuButton onClick={toggle}>☰</MenuButton>
//                   <NavLinkItem><NavLink to="/about">Search</NavLink></NavLinkItem>
//                 </div>
//                 <div className="col-4 d-flex justify-content-center">
//                   <NavLinkItem><NavLink to="/about">Leafeel</NavLink></NavLinkItem>
//                 </div>
//                 <div className="col-4 d-flex justify-content-center">
//                   <NavLinkItem><NavLink to="/profile">Wishlist</NavLink></NavLinkItem>
//                   <NavLinkItem><NavLink to="/profile">Shopping</NavLink></NavLinkItem>
//                 </div>
//               </div>
//       {/* <Logo to="/cloth-details"></Logo> */}
//       <NavLinks isOpen={isOpen}>
//         {isOpen && (
//           <>
//             <NavLinkItem><NavLink to="/">Categories</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Womens</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Men</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Kids</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/">Brands</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/about">About</NavLink></NavLinkItem>
//             <NavLinkItem><NavLink to="/faqs">FAQ</NavLink></NavLinkItem>
//           </>
//         )}
//         <div className="col-12 d-flex justify-content-center align-items-center">
//           {windowWidth > 900 && (
//             <div className="col-4 d-flex justify-content-between">
//               <NavLinkItem><NavLink to="/">Categories</NavLink></NavLinkItem>
//               <NavLinkItem><NavLink to="/">Womens</NavLink></NavLinkItem>
//               <NavLinkItem><NavLink to="/">Men</NavLink></NavLinkItem>
//               <NavLinkItem><NavLink to="/">Kids</NavLink></NavLinkItem>
//               <NavLinkItem><NavLink to="/">Brands</NavLink></NavLinkItem>
//             </div>
//           )}
//           <div className="col-4 d-flex justify-content-center">
//             <NavLinkItem><NavLink to="/">Leafeel</NavLink></NavLinkItem>
//           </div>
//             {windowWidth > 900 ? (
//               <div className="col-4 d-flex justify-content-between">
//                 <NavLinkItem><NavLink to="/about">About</NavLink></NavLinkItem>
//                 <NavLinkItem><NavLink to="/faqs">FAQ</NavLink></NavLinkItem>
//                 <NavLinkItem><NavLink to="/profile">My Account</NavLink></NavLinkItem>
//                 <NavLinkItem><LanguageButton setLanguage={setLanguage} /></NavLinkItem>
//               </div>
//             ) : (
//               <div  className="col-12 d-flex justify-content-center align-items-center">
//                 <div className="col-4 d-flex justify-content-center">
//                   <MenuButton onClick={toggle}>☰</MenuButton>
//                   <NavLinkItem><NavLink to="/about">Search</NavLink></NavLinkItem>
//                 </div>
//                 <div className="col-4 d-flex justify-content-center">
//                   <NavLinkItem><NavLink to="/about">Leafeel</NavLink></NavLinkItem>
//                 </div>
//                 <div className="col-4 d-flex justify-content-center">
//                   <NavLinkItem><NavLink to="/profile">Wishlist</NavLink></NavLinkItem>
//                   <NavLinkItem><NavLink to="/profile">Shopping</NavLink></NavLinkItem>
//                 </div>
//               </div>
//             )}
//         </div>
//       </NavLinks>
//     </Nav>
//   );
// };

// export default Navbar;
