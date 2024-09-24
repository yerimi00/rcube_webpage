import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      <Wrapper>
        <Logo>R-CUBE</Logo>
      </Wrapper>
    </Link>
  );
}

export default Header;

const Wrapper = styled.div`
  position: fixed;
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: none;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  text-decoration: none;
`;
