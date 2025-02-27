import React from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import styled from "styled-components";
import Button from "../UI/Button";

const StyledDivInput = styled.div`
  display: flex;
  padding: 0px 0px 0px 40px;
  gap: 16px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 20px;
  }
`;
const StyledAddressLabelApartement = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
  text-align: left;
`;
const StyledAddressDiv = styled.div`
  padding: 0px 0px 40px 40px;
  @media (max-width: 450px) {
    padding: 0px 0px 20px 20px;
  }
`;
const StyledAddressLabeleAddres = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
  text-align: left;
`;
const StyledAddressSpan = styled.span`
  color: rgba(228, 7, 7, 1);
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-align: left;
`;
const StyledAddressEntrance = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0px 0px 16px 0px;
  text-align: left;
`;
const StyledAddressFloor = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 24px 0px 16px 0px;
  text-align: left;
`;
const StyledAddressIntercom = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 24px 0px 16px 0px;
  text-align: left;
`;
const StyledEditAddressH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  text-align: center;
  padding: 30px 0px 32px 0px;
  @media (max-width: 450px) {
    padding: 20px 0px 20px 10px;
    text-align: left;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 32px;
    line-height: 27.52px;
  }
`;
const StyledAddressButton = styled.div`
  padding: 35px 0px 0px 40px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    width: 300px;
  }
`;
const EditFormAddress = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width="805px"
          height={"651px"}
        >
          <StyledEditAddressH1>Редактировать адрес</StyledEditAddressH1>
          <StyledAddressDiv>
            <StyledAddressLabeleAddres>
              Введите ваш адрес
            </StyledAddressLabeleAddres>
            <Input
              variant="enteryouraddress"
              placeholder="Город, улица и дом"
            />
          </StyledAddressDiv>
          <StyledDivInput>
            <div>
              <StyledAddressLabelApartement htmlFor="">
                Квартира <StyledAddressSpan>*</StyledAddressSpan>
              </StyledAddressLabelApartement>
              <Input variant="apartement" placeholder="Номер квартиры" />
            </div>
            <div>
              <StyledAddressEntrance htmlFor="">Подъезд</StyledAddressEntrance>
              <Input variant="apartement" placeholder="Номер подъезда" />
            </div>
          </StyledDivInput>
          <StyledDivInput>
            <div>
              <StyledAddressFloor htmlFor="">Этаж</StyledAddressFloor>
              <Input variant="apartement" placeholder="Номер этажа" />
            </div>
            <div>
              <StyledAddressIntercom htmlFor="">Домофон</StyledAddressIntercom>
              <Input variant="apartement" placeholder="Код домофона" />
            </div>
          </StyledDivInput>
          <StyledAddressButton>
            <Button variant="Сохранить">Сохранить</Button>
            <Button variant="Не сохранять">Не сохранять</Button>
          </StyledAddressButton>
        </Modal>
      )}
    </div>
  );
};

export default EditFormAddress;
