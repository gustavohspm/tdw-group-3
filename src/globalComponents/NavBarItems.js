import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import Profile from "../assets/user.svg";

const Category = styled.div`
  position: relative;
  color: var(--black-palette-color);
  font-size: 20px;
  padding: 0.5rem 0;
  cursor: pointer;
  font-family: "Century Gothic", sans-serif;

  ${({ currentDisabled }) =>
    currentDisabled &&
    css`
      filter: contrast(0.4);
      pointer-events: none;
      margin-left: 2rem;
      &:hover {
        transform: unset;
      }
    `}

  &:hover {
    color: var(--grey-palette-color-text);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background: var(--grey-palette-color-text);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    color: var(--grey-palette-color-text);
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  background-color: var(--white-palette-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  top: 48px;
  left: 0;
  width: fit-content;

  ${Category}:hover & {
    display: block;
  }
`;

const SubCategory = styled(Link)`
  color: var(--black-palette-color);
  text-decoration: none;
  display: block;
  padding: 4px 0;
  transform: none;
  border-bottom: 1px solid var(--grey-palette-color-background);
  width: 100%;
  padding: 1rem 2rem;
  font-size: 20px;

  &:hover {
    background-color: var(--grey-palette-color-background);
  }
`;

const NoHasSubCategory = styled(Link)`
  position: relative;
  color: var(--black-palette-color);
  font-size: 20px;
  padding: 0.5rem 0;
  cursor: pointer;
  text-decoration: none;
  padding-left: 1rem;
  transform: translateX(20px);
  font-family: "Century Gothic", sans-serif;

  ${({ currentDisabled }) =>
    currentDisabled &&
    css`
      filter: contrast(0.4);
      pointer-events: none;
    `}
`;

const StyledSimpleLink = styled(Link)`
    color: var(--black-palette-color);

      &:hover {
        color: var(--grey-palette-color-text) !important;
      }
  }
`;

const MobileCategory = styled(Category)`
  @media (max-width: 810px) {
    display: flex;
    align-items: unset !important;
    justify-content: space-between;
    padding-right: 1rem;
    transition:
      transform 0.3s ease-in-out,
      position 0.3s ease-in-out,
      top 0.3s ease-in-out;
    transform: ${({ active, index }) =>
      active === index ? "translateX(20px)" : "translateX(0)"};
    position: ${({ active, index }) =>
      active === index ? "absolute" : "relative"};
    top: ${({ active, index }) => (active === index ? "32px" : "unset")};

    ${({ currentDisabled }) =>
      currentDisabled &&
      css`
        filter: contrast(0.4);
        pointer-events: none;
        &:hover {
          transform: unset;
        }
      `}

    &:hover {
      transform: translateX(20px);
    }
  }

  @media (max-width: 810px) {
    justify-content: flex-start;
    padding-right: 0;
  }
`;

const MobileDropdown = styled(Dropdown)`
  @media (max-width: 810px) {
    display: ${({ isOpenMenu }) => (isOpenMenu ? "block" : "none")};
    position: static;
    width: 100%;
    box-shadow: none;
    padding: 0;
    opacity: ${({ isOpenMenu }) => (isOpenMenu ? "1" : "0")};
    visibility: ${({ isOpenMenu }) => (isOpenMenu ? "visible" : "hidden")};
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
    transition-delay: ${({ isOpenMenu }) => (isOpenMenu ? "0s" : "0.3s")};
  }
`;

const ChevronRight = styled.span`
  margin-left: 0.5rem;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? 0 : 1)};
  padding: 0.5rem;
`;

const ChevronLeft = styled.span`
  margin-right: 0.5rem;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  padding: 0.5rem;
`;

const IconSvg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

const NavBarItems = ({
  categories,
  activeCategory,
  setActiveCategory,
  isMenuOpen,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 810);
  const { language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 810);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && activeCategory !== null) {
      setActiveCategory(null);
    }
  }, [isMobile]);

  useEffect(() => {
    return () => {
      setActiveCategory(null);
    };
  }, []);

  return (
    <>
      {categories.map((category, index) => (
        <div key={`category-${index}`} style={{ width: "100%" }}>
          {isMobile ? (
            <MobileCategory
              currentDisabled={category.disabled == true}
              key={`mobile-category-${index}`}
              onClick={() =>
                isMobile &&
                setActiveCategory((prev) => (prev === index ? null : index))
              }
              style={{
                display:
                  isMobile &&
                  (activeCategory === null || activeCategory === index)
                    ? "block"
                    : "none",
                width: "100%",
                textTransform: "uppercase",
              }}
              active={activeCategory}
              index={index}
            >
              {category.subcategories || category.path ? (
                <>
                  <ChevronLeft active={activeCategory === index}>
                    <FaChevronLeft />
                  </ChevronLeft>
                  {category.name}
                  <ChevronRight active={activeCategory === index}>
                    <FaChevronRight />
                  </ChevronRight>
                </>
              ) : (
                <NoHasSubCategory
                  to={category.path}
                  style={{ textTransform: "uppercase" }}
                  currentDisabled={category.disabled == true}
                >
                  {category.image && (
                    <img
                      src={category.image}
                      alt={`Imagem da ${category.name}`}
                    />
                  )}
                  {category.path && !category.subcategories?.length && (
                    <StyledSimpleLink
                      style={{ textDecoration: "none", paddingLeft: "2rem" }}
                      to={category.path}
                    >
                      {category.name}
                    </StyledSimpleLink>
                  )}
                  {!category.path && <span>{category.name}</span>}
                </NoHasSubCategory>
              )}
            </MobileCategory>
          ) : (
            <Category
              currentDisabled={category.disabled == true}
              key={`category-${index}`}
              onMouseEnter={() => !isMobile && setActiveCategory(index)}
              style={{
                display: isMobile
                  ? activeCategory === index
                    ? "none"
                    : "block"
                  : "block",
                width: "100%",
                textTransform: "uppercase",
              }}
            >
              {category.subcategories && category.subcategories.length > 0 ? (
                <>
                  {category.path ? (
                    <StyledSimpleLink
                      style={{ textDecoration: "none", margin: "0 1rem" }}
                      to={category.path}
                    >
                      {category.name}
                    </StyledSimpleLink>
                  ) : (
                    <span>{category.name}</span>
                  )}
                  <Dropdown>
                    {category.subcategories.map((sub, subIndex) => (
                      <SubCategory
                        key={subIndex}
                        to={
                          category.path
                            ? `${category.path}${sub.path ? `${sub.path}` : ""}`
                            : sub.path
                        }
                        style={{ textTransform: "capitalize" }}
                      >
                        {sub.name}
                      </SubCategory>
                    ))}
                  </Dropdown>
                </>
              ) : (
                <NoHasSubCategory to={category.path}>
                  {category.image && (
                    <img
                      src={category.image}
                      alt={`Imagem da ${category.name}`}
                    />
                  )}
                  {category.path && !category.subcategories?.length && (
                    <StyledSimpleLink
                      style={{ textDecoration: "none" }}
                      to={category.path}
                    >
                      {category.name}
                    </StyledSimpleLink>
                  )}
                  {!category.path && <span>{category.name}</span>}
                </NoHasSubCategory>
              )}
            </Category>
          )}
        </div>
      ))}
      {isMobile && activeCategory !== null && (
        <MobileDropdown isOpenMenu={isMenuOpen}>
          {categories[activeCategory].subcategories &&
            categories[activeCategory].subcategories.map((sub, subIndex) => (
              <SubCategory
                key={subIndex}
                style={{ textTransform: "capitalize" }}
                to={
                  categories[activeCategory].path
                    ? `${categories[activeCategory].path}${
                        sub.path ? `${sub.path}` : ""
                      }`
                    : sub.path
                }
              >
                {sub.name}
              </SubCategory>
            ))}
        </MobileDropdown>
      )}
      {isMobile && (
        <div>
          <NoHasSubCategory to="/profile" className="d-flex align-items-center">
            <IconSvg src={Profile} />
            <span className="ms-2 text-uppercase">
              {language.globalTexts.myAccount}
            </span>
          </NoHasSubCategory>
        </div>
      )}
    </>
  );
};
NavBarItems.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      subcategories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  activeCategory: PropTypes.number,
  setActiveCategory: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default NavBarItems;
