import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
      <Wrapper>
        <Logo>R-CUBE</Logo>
        <Menu>
          <MenuBtn>학회운영</MenuBtn>
          <MenuBtn>프로젝트</MenuBtn>
          <MenuBtn>F&A</MenuBtn>
          <LoginBtn>로그인</LoginBtn>
        </Menu>
      </Wrapper>
    </Link>
  );
}

export default Header;

const Wrapper = styled.div`
  position: fixed;
  background: white;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  border: none;
  text-align: center;
  align-items: center;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  gap: 4rem;
`;

const MenuBtn = styled.div``;

const LoginBtn = styled.div`
  color: gray;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  width: 8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 3rem;
`;
