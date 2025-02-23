import React from "react";
import Input from "../UI/Input";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 536px;
  height: 427px;
  border-radius: 30px;
  background-color: rgba(247, 247, 247, 1);
  padding: 20px 0px 0px 40px;
  margin-top: 36px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    width: 428px;
    height: 415px;
    border-radius: 30px;
    padding: 20px 0px 0px 20px;
  }
`;
const StyledInputName = styled.div`
  @media (max-width: 450px) {
    width: 388px;
  }
`;
const StyledLabelName = styled.label`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
  display: block;
`;
const StyledLabelNumber = styled.label`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  display: block;
  padding: 24px 0px 16px 0px;
  line-height: 22.4px;
  @media (max-width: 450px) {
    padding: 16px 0px 16px 0px;
  }
`;
const StyledLabelAddress = styled.label`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  display: block;
  padding: 24px 0px 16px 0px;
  line-height: 22.4px;
  @media (max-width: 450px) {
    padding: 16px 0px 16px 0px;
  }
`;
const StyledPersonals = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 0px 16px 0px;
`;
const StyledInputNumber = styled.div`
  width: 456px;
  @media (max-width: 450px) {
    width: 388px;
  }
`;
const StyledInput = styled.div`
  width: 456px;
  @media (max-width: 450px) {
    width: 388px;
  }
`;
const Personalnformation = () => {
  return (
    <div>
      <StyledForm>
        <StyledPersonals>Личные данные</StyledPersonals>
        <StyledInputName>
          <StyledLabelName htmlFor="">Имя</StyledLabelName>
          <Input variant="endername" placeholder="Введите имя" />
        </StyledInputName>
        <StyledInputNumber>
          <StyledLabelNumber htmlFor="">Номер телефона</StyledLabelNumber>
          <Input variant="phonenumber" placeholder="Номер телефона" />
        </StyledInputNumber>
        <StyledInput>
          <StyledLabelAddress htmlFor="">Адрес доставки</StyledLabelAddress>
          <Input variant="selectaddress" placeholder="Выберите адрес" />
        </StyledInput>
      </StyledForm>
    </div>
  );
};

export default Personalnformation;
