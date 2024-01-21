import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Hamburger = styled.div`
  display: inline-block;
  height: 29px;
  margin-right: 16px;
  position: relative;
  width: 28px;
`;

const MainNavToggle = styled.a`
  display: block;
  width: 28px;
  height: 16px;
  cursor: pointer;
  text-decoration: none;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 4px;
    width: 100%;
    background-color: var(--black-palette-color);
    transition: all ease-out 0.3s;
  }

  &:after {
    top: 8px;
  }

  i {
    display: block;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 4px;
    background-color: var(--black-palette-color);
    width: 100%;
    position: absolute;
    top: 50%;
    transition: all ease-out 0.1s;
  }

  &.active-menu {
    &:after {
      transform: rotate(-45deg);
      top: 50%;
    }

    &:before {
      transform: rotate(45deg);
      top: 50%;
    }

    i {
      opacity: 0;
    }
  }

  @media (min-width: 810px) {
    i {
      display: none;
    }

    &:after,
    &:before {
      height: 4px;
    }
  }

  ${(props) =>
    props.isMenuOpen &&
    `
    i {
      display: none;
    }

    &:after {
      transform: rotate(-45deg);
      top: 50%;
    }

    &:before {
      transform: rotate(45deg);
      top: 50%;
    }
  `}
`;

const MenuHamburguerButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Hamburger>
      <MainNavToggle
        href="#main-nav"
        className={isMenuOpen ? "active-menu" : ""}
        onClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      >
        <i>Menu</i>
      </MainNavToggle>
    </Hamburger>
  );
};

MenuHamburguerButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuHamburguerButton;
