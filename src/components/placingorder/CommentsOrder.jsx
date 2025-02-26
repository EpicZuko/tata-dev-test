import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const StyledCommentsDiv = styled.div`
  width: 536px;
  height: 233px;
  border-radius: 30px;
  background: rgba(247, 247, 247, 1);
  padding: 40px 0px 24px 40px;
  margin: 0px 0px 24px 0px;
  @media (max-width: 450px) {
    width: 428px;
    height: 233px;
    border-radius: 30px;
    padding: 40px 0px 24px 20px;
  }
`;
const StyledCommentsH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding-bottom: 24px;
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
    width: 388px;
    height: 115px;
    border-radius: 30px;
    padding: 24px;
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
`;
const CommentsOrder = () => {
  return (
    <div>
      <StyledCommentsDiv>
        <StyledCommentsH1>Комментарии к заказу</StyledCommentsH1>
        <StyledCommentsTextarea placeholder="Можете оставить комментарий" />
      </StyledCommentsDiv>
      <StyledCommentsButton>
        <Button variant="Оформить заказ за">
          Оформить заказ за 17 000 сом
        </Button>
      </StyledCommentsButton>
    </div>
  );
};

export default CommentsOrder;
