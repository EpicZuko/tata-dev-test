import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const StyledOrderContent = styled.div`
  width: 536px;
  height: 479px;
  border-radius: 30px;
  background-color: rgba(247, 247, 247, 1);
  margin-top: 36px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    width: 428px;
    height: 479px;
    border-radius: 30px;
  }
`;
const StyledGrillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 40px 0px 40px;
`;
const StyledGrillButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const STyledGrillH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
`;
const StyledSpanGrill = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledGrillH2 = styled.h2`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
`;
const StyledGrillCount = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledOrderH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding: 40px 0px 0px 40px;
`;
const StyledTashCordo = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 30px 40px 0px 40px; */
  margin: 30px 40px 0px 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(235, 234, 234, 1);
`;
const StyledTashCordoH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
`;
const StyledTashCordoSpan = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledTashCordoH2 = styled.h2`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
`;
const StyledTashOrdoCount = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledTashCordoButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* padding: 0px 40px 0px 40px; */
`;
const OrderAmountStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 40px 0px 40px;
`;
const OrderAmountStyledH2 = styled.h2`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyledSpan = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyledH4 = styled.h4`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyledPrice = styled.h2`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyledStar = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyledBesplatno = styled.h4`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const OrderAmountStyleds = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  color: rgba(54, 54, 54, 1);
  text-align: center;
  width: 506px;
  justify-content: space-between;
  padding: 32px 0px 0px 0px;
  word-spacing: 10px;
  @media (max-width: 450px) {
    width: 388px;
    word-spacing: 5px;
  }
`;
const OrderContents = () => {
  return (
    <StyledOrderContent>
      <StyledOrderH1>Состав заказа</StyledOrderH1>
      {/* --- */}
      <StyledGrillContainer>
        <div>
          <STyledGrillH1>Козу гриль</STyledGrillH1>
          <StyledSpanGrill>7-8 кг</StyledSpanGrill>
        </div>
        <div>
          <StyledGrillH2>8 500 сом</StyledGrillH2>
          <StyledGrillButton>
            <Button variant="minus" />
            <StyledGrillCount>1</StyledGrillCount>
            <Button variant="plus" />
          </StyledGrillButton>
        </div>
      </StyledGrillContainer>
      {/* --- */}
      {/* ---- */}
      <StyledTashCordo>
        <div>
          <StyledTashCordoH1>Таш кордо</StyledTashCordoH1>
          <StyledTashCordoSpan>12-13 кг</StyledTashCordoSpan>
        </div>
        <div>
          <StyledTashCordoH2>8 500 сом</StyledTashCordoH2>
          <StyledTashCordoButton>
            <Button variant="minus" />
            <StyledTashOrdoCount>1</StyledTashOrdoCount>
            <Button variant="plus" />
          </StyledTashCordoButton>
        </div>
      </StyledTashCordo>
      {/* ---- */}

      <div>
        <OrderAmountStyled>
          <div>
            <OrderAmountStyledH2>2 товара</OrderAmountStyledH2>
            <OrderAmountStyledSpan>Баллы</OrderAmountStyledSpan>
            <OrderAmountStyledH4>Доставка</OrderAmountStyledH4>
          </div>
          <div>
            <OrderAmountStyledPrice>17 000 сом</OrderAmountStyledPrice>
            <OrderAmountStyledStar>+60</OrderAmountStyledStar>
            <OrderAmountStyledBesplatno>бесплатно</OrderAmountStyledBesplatno>
          </div>
        </OrderAmountStyled>
        <div>
          <OrderAmountStyleds>Сумма заказа 17 000 сом</OrderAmountStyleds>
        </div>
      </div>
    </StyledOrderContent>
  );
};

export default OrderContents;
