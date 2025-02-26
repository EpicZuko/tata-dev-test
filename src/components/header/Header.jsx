import React, { useState } from "react";
import Toggle from "react-toggle";
import Input from "../UI/Input";
import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import star from "../../assets/icons/ic_star.svg";
import user from "../../assets/icons/ic_user.svg";
import shopping from "../../assets/icons/ic_shopping-cart.svg";
import "react-toggle/style.css";
import HeaderList from "./HeaderList";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../services/slices/CartSlice";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 128px;
`;
const ImagesLogo = styled.img`
  margin: 0px 24px 0px 60px;
  cursor: pointer;
  @media (max-width: 450px) {
    margin: 0px 10px 0px 10px;
    width: 85px;
    height: 85px;
  }
`;
const StyledH4 = styled.h4`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.8px;
  color: rgba(127, 127, 127, 1);
`;
const StyledNumberH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 28px;
  line-height: 39.2px;
  text-align: center;
`;
const StyledDivPhone = styled.div`
  margin: 0px 157px 0px 0px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledInputDiv = styled.div`
  margin: 0px 50px 0px 0px;
`;
const StyledToggleDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 44px 0px 0px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledDivRuKg = styled.div`
  display: flex;
  padding: 8px 0px 0px 0px;
  gap: 8px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledRu = styled.h5`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.8px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledSpan = styled.span`
  font-family: Nunito Sans;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  width: 4px;
  height: 8px;
  @media (max-width: 450px) {
    display: none;
  }
`;

const StyledStar = styled.h5`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.8px;
  margin: 0px 16px 0px 0px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;
const ImagesStar = styled.img`
  margin-left: 8px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;
const ImagesUser = styled.img`
  margin-left: 5px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledUser = styled.h5`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.8px;
  margin: 0px 16px 0px 0px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;
const StyledShopping = styled.h5`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.8px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      <HeaderStyled>
        <div>
          <ImagesLogo src={logo} alt="logo" />
        </div>
        <StyledDivPhone>
          <StyledH4>Звоните и заказывайте</StyledH4>
          <StyledNumberH1>+996 508 842 444</StyledNumberH1>
        </StyledDivPhone>
        <StyledInputDiv>
          <Input variant="search" placeholder="Поиск" />
        </StyledInputDiv>
        <StyledToggleDiv>
          <Toggle
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{ checked: "", unchecked: "" }}
            aria-label="Dark mode toggle"
          />
          <StyledDivRuKg>
            <StyledRu>Ру</StyledRu>
            <StyledSpan>|</StyledSpan>
            <StyledRu>Кг</StyledRu>
          </StyledDivRuKg>
        </StyledToggleDiv>
        <div>
          <ImagesStar src={star} alt="star" />
          <StyledStar>Бонусы</StyledStar>
        </div>
        <div>
          <ImagesUser src={user} alt="user" />
          <StyledUser>Войти</StyledUser>
        </div>
        <div onClick={() => dispatch(toggleCart())}>
          <ImagesStar src={shopping} alt="shopping" />
          <StyledShopping>Корзина</StyledShopping>
        </div>
      </HeaderStyled>
      <HeaderList />
    </>
  );
};

export default Header;
