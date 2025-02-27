import React from "react";
import Button from "../components/UI/Button";
import styled from "styled-components";
import images from "../assets/icons/notfoundpage.svg";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 40px 0px;
`;
const StyledImages = styled.img`
  width: 560px;
  height: 560px;
  @media (max-width: 450px) {
    width: 388px;
    height: 388px;
  }
  @media (max-width: 380px) {
    width: 300px;
    height: 228px;
  }
`;
const StyledH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  text-align: center;
  padding: 0px 0px 24px 0px;
  @media (max-width: 380px) {
    padding: 0px 0px 4px 0px;
  }
`;
const StyledText = styled.p`
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-align: center;
  padding: 0px 0px 40px 0px;
  @media (max-width: 450px) {
    padding: 0px 0px 109px 0px;
  }
  @media (max-width: 450px) {
    padding: 0px 0px 19px 0px;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledImages src={images} alt="images-not-found_page" />
      <StyledH1>Страница не найдена</StyledH1>
      <StyledText>Такой страницы не существует</StyledText>
      <Button variant="Вернуться на главную" onClick={() => navigate("/")}>
        Вернуться на главную
      </Button>
    </StyledDiv>
  );
};

export default NotFoundPage;
