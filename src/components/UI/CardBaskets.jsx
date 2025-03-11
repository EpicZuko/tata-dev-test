import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
// import basketimages from "../../assets/icons/image (2).svg";

const BasketContainer = styled.div`
  background-color: rgba(247, 247, 247, 1);
  width: 620px;
  height: auto;
  @media (max-width: 450px) {
    width: 100%;
    height: auto;
    padding: 1.5rem 0px 1.5rem 0px;
  }
`;
const BasketDiv = styled.div`
  display: flex;
  @media (max-width: 450px) {
    width: 100%;
    height: 222px;
    display: flex;
  }
`;
const Images = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 19.17px;
  padding: 24px 24px 0px 24px;
  @media (max-width: 450px) {
    width: 15rem;
    height: 111px;
    border-radius: 17.82px;
    object-fit: cover;
  }
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
  align-items: center;
  justify-content: center;
  padding: 0px 0px 20px 110px;
  margin-top: -40px;
  gap: 141px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-around;
    padding: 20px 0px 10px 0px;
    margin-top: -100px;
    gap: 2rem;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    margin-left: -30px;
  }
`;
const SpanDiscount = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 16px 0px 16px;
`;
const CardBaskets = ({
  name,
  kg,
  price,
  count,
  images,
  onClickPlus,
  onClickMinus,
}) => {
  return (
    <BasketContainer>
      <BasketDiv>
        <div>
          <Images src={images} alt="Images" />
        </div>
        <div>
          <div>
            <StyledNameH1>{name}</StyledNameH1>
            <StyledSpan>{kg} кг</StyledSpan>
          </div>
        </div>
      </BasketDiv>
      <StyledPriceContainer>
        <StyledPrice>{price} сом</StyledPrice>
        <StyledButtonContainer>
          <Button variant="minus" onClick={onClickMinus} />
          <SpanDiscount>{count}</SpanDiscount>
          <Button variant="plus" onClick={onClickPlus} />
        </StyledButtonContainer>
      </StyledPriceContainer>
    </BasketContainer>
  );
};

export default CardBaskets;
