import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: var(--black-palette-color);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--white-palette-color);
    font-weight: bold;
  }

  button {
    background-color: var(--black-palette-color);
    color: var(--white-palette-color);
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 5px 10px;
  }
`;
