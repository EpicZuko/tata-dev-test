import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

const StyledCommentsContainer = styled.div`
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const StyledCommentsDiv = styled.div`
  width: 536px;
  height: 233px;
  border-radius: 30px;
  background: rgba(247, 247, 247, 1);
  padding: 40px 0px 24px 40px;
  margin: 0px 0px 24px 0px;
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    height: 233px;
    border-radius: 30px;
    padding: 40px 0px 24px 0px;
    margin: 0px 6.5rem 1rem 6.5rem;
  }
  @media (max-width: 380px) {
    width: 300px;
    height: 183px;
    border-radius: 30px;
    padding: 20px 0px 24px 30px;
    margin: 0px 0px 20px 50px;
  }
`;
const StyledCommentsH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding-bottom: 24px;
  @media (max-width: 380px) {
    font-size: 18px;
    padding-bottom: 14px;
  }
`;
const StyledCommentsTextarea = styled.textarea`
  width: 456px;
  height: 115px;
  border-radius: 30px;
  padding: 10px;
  font-family: Nunito Sans;
  font-size: 14px;
  line-height: 19.6px;
  padding: 24px;
  border: none;
  resize: none; /* Запрещает изменение размера */
  outline: none;
  @media (max-width: 450px) {
    width: 90%;
    height: 115px;
    border-radius: 30px;
    padding: 24px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 380px) {
    width: 90%;
    height: 95px;
    border-radius: 30px;
    padding: 24px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  &:focus {
    border-color: rgba(0, 145, 66, 1);
  }
`;
const StyledCommentsButton = styled.div`
  @media (max-width: 450px) {
    width: 388px;
    height: 65px;
    border-radius: 40px;
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 24px;
    line-height: 33.6px;
    text-align: center;
  }
  @media (max-width: 380px) {
    width: 388px;
    height: 65px;
    border-radius: 40px;
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 24px;
    line-height: 33.6px;
    text-align: center;
    margin-bottom: 80px;
  }
`;
const CommentsOrder = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <StyledCommentsContainer>
      <StyledCommentsDiv>
        <StyledCommentsH1>Комментарии к заказу</StyledCommentsH1>
        <StyledCommentsTextarea placeholder="Можете оставить комментарий" />
      </StyledCommentsDiv>
      <StyledCommentsButton>
        <Button variant="Оформить заказ за">
          Оформить заказ за <span>{totalPrice}</span> сом
        </Button>
      </StyledCommentsButton>
    </StyledCommentsContainer>
  );
};

export default CommentsOrder;
