import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import edit from "../../assets/icons/ic_edit.svg";
import EditFormAddress from "./EditFormAddress";
import NewAddressForm from "./NewAddressForm";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 45px;
  width: 401px;
  height: 56px;
  margin: 20px 0px 36px 36px;
  @media (max-width: 450px) {
    width: 388px;
    height: 56px;
    margin:60px 0px 0px 20px;
  }
`;
const ToggleInput = styled.input`
  display: none;
`;
const ToggleLabel = styled.label`
  width: 304px;
  height: 48px;
  border-radius: 60px;
  padding-top: 16px;
  padding-right: 44px;
  padding-bottom: 16px;
  padding-left: 64px;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ active }) => (active ? "white" : "transparent")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;
const StyledText = styled.p`
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-align: center;
  padding: 0px 0px 36px 0px;
  @media (max-width: 450px) {
    padding: 30px 0px 36px 0px;
  }
`;

const Card = styled.div`
  width: 395px;
  height: 166px;
  border-radius: 20px;
  padding: 20px;
  background: ${(props) => (props.active ? "#f8f8f8" : "#f2f2f2")};
  margin: 8px 0px 0px 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    margin: 40px 0px 40px 20px;
  }
`;
// const CardStyled = styled.div`
//   width: 395px;
//   height: 138px;
//   border-radius: 20px;
//   padding: 20px;
//   background: ${(props) => (props.active ? "#f8f8f8" : "#f2f2f2")};
//   margin: 8px 0px 0px 40px;
//   display: flex;
//   flex-direction: column;
// `;

const EditIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const AddressText = styled.h2`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  text-align: left;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  width: 315px;
  height: 42px;
  padding: 20px 0px 0px 0px;
`;
const ButtonStyled = styled.button`
  width: 395px;
  height: 65px;
  border-radius: 40px;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 24px;
  line-height: 33.6px;
  text-align: center;
  background-color: rgba(0, 145, 66, 1);
  color: white;
  border: none;
  margin: 24px 0px 16px 0px;
  cursor: pointer;
`;

const FormModal = ({isOpen,setIsOpen}) => {
  const [selected, setSelected] = useState("Доставка");
  const [showAddress, setShowAddress] = useState(false); 
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isNewFormSelected, setNewFormSelected] = useState(false);

  const editIsvisible = () => {
    setIsEditSelected(true);
  };
  const editCloseIsVisile = () => {
    setIsEditSelected(false);
  };
  const newFormIsvisibleOpen = () => {
    setNewFormSelected(true);
  };
  const newFormIsvisibleClose = () => {
    setNewFormSelected(false);
  };
  return (
    <div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width="475px"
          height={showAddress ? "496px" : "284px"}
        >
          <ToggleWrapper>
            {["Доставка", "Самовывоз"].map((option) => (
              <div key={option}>
                <ToggleInput
                  type="radio"
                  id={option}
                  name="delivery"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                />
                <ToggleLabel htmlFor={option} active={selected === option}>
                  {option}
                </ToggleLabel>
              </div>
            ))}
          </ToggleWrapper>

          {showAddress && (
            <Card active>
              <EditIcon src={edit} alt="edit" onClick={editIsvisible} />
              <AddressText>Байтик Баатыра, 20 (Советская), кв. 40</AddressText>
            </Card>
          )}

          {showAddress === true ? (
            ""
          ) : (
            <StyledText>Вы ещё не добавили ни одного адреса</StyledText>
          )}
          {showAddress === true ? (
            <>
              <ButtonStyled variant="Выбрать">Выбрать</ButtonStyled>
              {selected === "Доставка" && (
                <Button variant="Добавить" onClick={newFormIsvisibleOpen}>
                  Добавить адрес
                </Button>
              )}
            </>
          ) : (
            <Button
              variant="Добавить адрес"
              onClick={() => setShowAddress(true)}
            >
              Добавить адрес
            </Button>
          )}
          {isEditSelected && (
            <EditFormAddress
              isOpen={isEditSelected}
              setIsOpen={editCloseIsVisile}
            />
          )}
          {isNewFormSelected && (
            <NewAddressForm
              isOpen={isNewFormSelected}
              setIsOpen={newFormIsvisibleClose}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default FormModal;
