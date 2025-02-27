import React, { useState } from "react";
import styled from "styled-components";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
} from "../../services/slices/CartSlice";
import { FiShoppingCart, FiX } from "react-icons/fi";
import CardBaskets from "../UI/CardBaskets";
import Button from "./Button";
import busketimages from "../../assets/icons/basketbuskets.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  z-index: 15000;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    max-height: calc(100vh - 150px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 12010;
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

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0px 0px 20px 20px;
  }
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

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
  
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const isFreeDelivery = totalPrice >= 10000;
  const deliveryPrice = isFreeDelivery ? "бесплатно" : "500 сом";

  const goToOrderForm = () => {
    navigate("/order");
  };
  return (
    <>
      <Overlay open={isCartOpen} onClick={() => dispatch(toggleCart())} />

      <CartWrapper open={isCartOpen}>
        <CloseButton onClick={() => dispatch(toggleCart())}>
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
                  kg={item.selectedWeight}
                  images={item.images}
                  count={item.count}
                  price={`${item.price}`}
                  onClickMinus={() => dispatch(decreaseQuantity(item.id))}
                  onClickPlus={() => dispatch(increaseQuantity(item.id))}
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
                  <Button variant="К оформлению заказа" onClick={goToOrderForm}>
                    К оформлению заказа
                  </Button>
                </ButtonDiv>
              </OrderDetails>
            </BusketOrder>
          </>
        ) : (
          <EmptyCart>
            <img src={busketimages} alt="empty cart" />
            <h2>Корзина пуста</h2>
            <p>Добавьте товары в корзину, чтобы оформить заказ.</p>
          </EmptyCart>
        )}
      </CartWrapper>
    </>
  );
};

export default CartBasketsKorzonina;
