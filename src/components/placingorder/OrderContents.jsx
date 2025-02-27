import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../services/slices/CartSlice"; // Импорт экшенов

const StyledOrderContent = styled.div`
  width: 536px;
  height: 479px;
  max-height: 479px; /* Или нужная высота */
  overflow-y: auto; /* Вертикальная прокрутка */
  overflow-x: hidden;
  border-radius: 30px;
  background-color: rgba(247, 247, 247, 1);
  margin-top: 36px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    width: 428px;
    height: 479px;
    border-radius: 30px;
  }
  @media (max-width: 380px) {
    width: 308px;
    height: 479px;
    border-radius: 30px;
    margin-left: 50px;
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
// const StyledTashCordo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* padding: 30px 40px 0px 40px; */
//   margin: 30px 40px 0px 40px;
//   padding-bottom: 40px;
//   border-bottom: 1px solid rgba(235, 234, 234, 1);
// `;
// const StyledTashCordoH1 = styled.h1`
//   font-family: Nunito Sans;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 22.4px;
//   padding: 0px 0px 16px 0px;
// `;
// const StyledTashCordoSpan = styled.span`
//   font-family: Nunito Sans;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22.4px;
// `;
// const StyledTashCordoH2 = styled.h2`
//   font-family: Nunito Sans;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 22.4px;
//   padding: 0px 0px 16px 0px;
// `;
// const StyledTashOrdoCount = styled.span`
//   font-family: Nunito Sans;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 28px;
// `;
// const StyledTashCordoButton = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   /* padding: 0px 40px 0px 40px; */
// `;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 32px 0px 0px 0px;
  word-spacing: 10px;
  @media (max-width: 450px) {
    width: 388px;
    word-spacing: 5px;
  }
  @media (max-width: 380px) {
    width: 308px;
    word-spacing: 0px;
    font-size: 20px;
  }
`;

const OrderContents = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <StyledOrderContent>
      <StyledOrderH1>Состав заказа</StyledOrderH1>

      {cart.length > 0
        ? cart.map((item) => (
            <StyledGrillContainer key={item.id}>
              <div>
                <STyledGrillH1>{item.name}</STyledGrillH1>
                <StyledSpanGrill>{item.selectedWeight} кг</StyledSpanGrill>
              </div>
              <div>
                <StyledGrillH2>{item.price * item.quantity} сом</StyledGrillH2>
                <StyledGrillButton>
                  <Button
                    variant="minus"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  />
                  <StyledGrillCount>{item.count}</StyledGrillCount>
                  <Button
                    variant="plus"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  />
                </StyledGrillButton>
              </div>
            </StyledGrillContainer>
          ))
        : ""}

      <OrderAmountStyled>
        <div>
          <OrderAmountStyledH2>{cart.length} товара</OrderAmountStyledH2>
          <OrderAmountStyledSpan>Баллы</OrderAmountStyledSpan>
          <OrderAmountStyledH4>Доставка</OrderAmountStyledH4>
        </div>
        <div>
          <OrderAmountStyledPrice>
            {totalPrice}
            сом
          </OrderAmountStyledPrice>
          <OrderAmountStyledStar>+60</OrderAmountStyledStar>
          <OrderAmountStyledBesplatno>бесплатно</OrderAmountStyledBesplatno>
        </div>
      </OrderAmountStyled>

      <OrderAmountStyleds>
        <span>Сумма заказа</span>
        <span>
          {totalPrice}
          сом
        </span>
      </OrderAmountStyleds>
    </StyledOrderContent>
  );
};

export default OrderContents;
