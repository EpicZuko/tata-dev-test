import React, { useState } from "react";
import styled from "styled-components";
import { FiShoppingCart, FiX } from "react-icons/fi";
import CardBaskets from "../UI/CardBaskets";
import Button from "./Button";
import busketimages from "../../assets/icons/basketbuskets.svg";

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 620px;
  height: 100vh;
  background: #fff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;
const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 99;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
  padding: 20px 20px 0px 0px;
`;

const CartButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(247, 247, 247, 1);
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const BasketH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 36px;
  line-height: 30.96px;
  padding: 0px 0px 28px 40px;
`;

const BusketOrder = styled.div`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: rgba(247, 247, 247, 1);
  padding: 20px 40px;
  position: sticky;
  bottom: 0;
  z-index: 10;
  color: rgba(54, 54, 54, 1);
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const StyledGoods = styled.h3`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledPrice = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledPoints = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledSixty = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledDelivery = styled.h3`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
`;
const StyledForFree = styled.span`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(54, 54, 54, 1);
`;
const StyledOrderAmount = styled.h2`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
`;
const StyledOrderAmountPrice = styled.span`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  color: rgba(54, 54, 54, 1);
`;
const InputPromotional = styled.input`
  border: none;
  background: transparent;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  outline: none;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  img {
    max-width: 250px;
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 10px;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 24px;
    line-height: 33.6px;
    text-align: center;
  }
  p {
    color: #666;
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    width: 330px;
  }
`;
const CartBasketsKorzonina = () => {
  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const isFreeDelivery = totalPrice >= 10000;
  const deliveryPrice = isFreeDelivery ? "бесплатно" : "500 сом";

  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <>
      <CartButton onClick={() => setOpen(true)}>
        <FiShoppingCart />
      </CartButton>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <CartWrapper open={open}>
        <CloseButton onClick={() => setOpen(false)}>
          <FiX />
        </CloseButton>
        <BasketH1>Корзина</BasketH1>

        {cartItems.length > 0 ? (
          <>
            <CartContent>
              {cartItems.map((item) => (
                <CardBaskets
                  key={item.id}
                  name={item.name}
                  kg={item.kg}
                  count={item.count}
                  price={`${item.price}`}
                  onClickMinus={() => handleDecrease(item.id)}
                  onClickPlus={() => handleIncrease(item.id)}
                  showMinusButton={item.count > 1}
                />
              ))}
            </CartContent>

            <BusketOrder>
              <OrderDetails>
                <OrderRow>
                  <InputPromotional
                    maxLength="4"
                    type="number"
                    placeholder="Введите промокод"
                  />
                </OrderRow>
                <OrderRow>
                  <StyledGoods>{totalCount} товара</StyledGoods>
                  <StyledPrice>{totalPrice} сом</StyledPrice>
                </OrderRow>
                <OrderRow>
                  <StyledPoints>Баллы</StyledPoints>
                  <StyledSixty>+{cartItems.length * 30}</StyledSixty>
                </OrderRow>
                <OrderRow>
                  <StyledDelivery>Доставка</StyledDelivery>
                  <StyledForFree>{deliveryPrice}</StyledForFree>
                </OrderRow>
                <OrderRow>
                  <StyledOrderAmount>Сумма заказа</StyledOrderAmount>
                  <StyledOrderAmountPrice>
                    {totalPrice} сом
                  </StyledOrderAmountPrice>
                </OrderRow>
                <ButtonDiv>
                  <Button variant="К оформлению заказа">
                    К оформлению заказа
                  </Button>
                </ButtonDiv>
              </OrderDetails>
            </BusketOrder>
          </>
        ) : (
          <EmptyCart>
            <img src={busketimages} alt="images" />
            <h2>Ваша корзина пуста</h2>
            <p>
              Добавьте товары, а мы их доставим. Минимальная сумма заказа — 1000
              сом.
            </p>
          </EmptyCart>
        )}
      </CartWrapper>
    </>
  );
};

export default CartBasketsKorzonina;
