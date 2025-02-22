import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import basketimages from "../../assets/icons/image (2).svg";

const Basket = styled.div`
  display: flex;
`;
const BasketDiv = styled.div`
  display: flex;
  background-color: rgba(247, 247, 247, 1);
  width: 620px;
  height: 168px;
`;
const Images = styled.img`
  width: 200;
  height: 120;
  border-radius: 19.17px;
  padding: 24px 24px 0px 24px;
`;
const StyledNameH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding: 24px 0px 0px 0px;
`;
const StyledSpan = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(127, 127, 127, 1);
`;
const StyledPrice = styled.h2`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledPriceContainer = styled.div`
  display: flex;
  padding: 45px 0px 0px 0px;
  gap: 141px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SpanDiscount = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 16px 0px 16px;
`;
const CardBaskets = ({ name, kg, price, count, onClickPlus, onClickMinus }) => {
  return (
    <div>
      <BasketDiv>
        <div>
          <Images src={basketimages} alt="" />
        </div>
        <div>
          <div>
            <StyledNameH1>{name}</StyledNameH1>
            <StyledSpan>{kg} кг</StyledSpan>
          </div>
          <StyledPriceContainer>
            <StyledPrice>{price} сом</StyledPrice>
            <StyledButtonContainer>
              <Button variant="minus" onClick={onClickMinus} />
              <SpanDiscount>{count}</SpanDiscount>
              <Button variant="plus" onClick={onClickPlus} />
            </StyledButtonContainer>
          </StyledPriceContainer>
        </div>
      </BasketDiv>
    </div>
  );
};

export default CardBaskets;
