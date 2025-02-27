import React from "react";
import Personalnformation from "./Personalnformation";
import OrderContents from "./OrderContents";
import CommentsOrder from "./CommentsOrder";
import PaymentMethods from "./PaymentMethods";
import styled from "styled-components";

const StyledOrderForm = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 36px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledOrderFormH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 36px;
  line-height: 30.96px;
  margin-top: 36px;
  margin-left: 105px;
  @media (max-width: 450px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 27.52px;
    margin-left: 20px;
  }
  @media (max-width: 450px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 27.52px;
    margin-left: 20px;
  }
`;
const OrderForm = () => {
  return (
    <div>
      <StyledOrderFormH1>Оформление заказа</StyledOrderFormH1>
      <StyledOrderForm>
        <div>
          <Personalnformation />
          <PaymentMethods />
        </div>
        <div>
          <OrderContents />
          <CommentsOrder />
        </div>
      </StyledOrderForm>
    </div>
  );
};

export default OrderForm;
