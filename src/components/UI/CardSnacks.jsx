import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/slices/CartSlice";
import Snackbar from "./Snackbar";

const CardAndGrillStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 0px 0px -200px 0px;
  @media (max-width: 450px) {
    margin: 0px 0px 24px 0px;
  }
`;
const PRODUCTCARD = styled.div`
  background-color: rgba(247, 247, 247, 1);
  width: 312px;
  height: 353px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 428px) {
    width: 388px;
    height: 399px;
  }
`;
const IMAGESTYLED = styled.img`
  width: 312px;
  height: 188px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  cursor: pointer;
  @media (max-width: 428px) {
    width: 388px;
    height: 234px;
  }
`;
const NAMESTYLEDH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  letter-spacing: 4%;
  padding: 20px 16px 0px 16px;
  @media (max-width: 428px) {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 24px;
  }
`;
const TEXTPARAGRAP = styled.p`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  padding-left: 16px;
`;
const PRICEANDBUTTONCONTAINER = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 36px;
  justify-content: space-between;
  @media (max-width: 428px) {
    width: 380px;
    height: 36px;
    justify-content: space-between;
    line-height: 28px;
  }
`;
const BUTTONDIV = styled.div`
  padding: 30px 0px 0px 0px;
`;
const PRICE = styled.h3`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding: 45px 16px 0px 16px;
  @media (max-width: 428px) {
    display: flex;
    gap: 10px;
  }
`;
const SPANTEXT = styled.span`
  display: none;
  @media (max-width: 428px) {
    display: block;
  }
`;
const DIVMODAL = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const IMAGESCARD = styled.img`
  width: 523px;
  height: 434px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 450px) {
    width: 414px;
    height: 234px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    /* border-radius: 16.76px; */
  }
`;
const ModalH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  color: rgba(54, 54, 54, 1);
  margin-left: 36px;
  margin: 36px 0px 20px 36px;
  margin-top: 36px;
  @media (max-width: 450px) {
    line-height: 20.64px;
    margin-left: 20px;
  }
`;
const ModalP = styled.p`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(127, 127, 127, 1);
  margin: 0px 0px 20px 36px;
  @media (max-width: 450px) {
    margin: 0px 0px 20px 20px;
  }
`;
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(247, 247, 247, 1);
  border-radius: 45px;
  padding: 20px;
  width: 401px;
  height: 56px;
  margin: 0px 0px 120px 36px;
  @media (max-width: 450px) {
    width: 388px;
    height: 56px;
    margin: 0px 0px 0px 20px;
  }
`;

const ToggleLabel = styled.label`
  width: 204px;
  height: 48px;
  border-radius: 40px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  border-radius: 20px;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ active }) => (active ? "white" : "transparent")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;
const ButtonsDiv = styled.div`
  margin: 0px 0px 0px 36px;
  @media (max-width: 450px) {
    margin: 36px 0px 0px 20px;
  }
`;
const ToggleInput = styled.input`
  display: none;
`;
const StyledH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: 0px 0px 20px 0px;
  @media (max-width: 450px) {
    margin: 0px 0px 200px 0px;
    font-size: 24px;
  }
`;
const StyledSnacksH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 40px;
  line-height: 34.4px;
  padding: 0px 0px 48px 100px;
  @media (max-width: 450px) {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0%;
    padding: 0px 0px 28px 20px;
  }
`;

const priceMultipliers = {
  "7-8": 1,
  "13-14": 1.2,
  "19-20": 1.5,
};

const CardSnacks = ({ dataArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selected, setSelected] = useState("7-8");
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const updatedPrice = useMemo(() => {
    return selectedCard?.price
      ? Math.round(selectedCard.price * priceMultipliers[selected])
      : selectedCard?.price;
  }, [selected, selectedCard]);

  const handleAddToCart = (item) => {
    if (!item) return;

    const updatedPrice = Math.round(item.price * priceMultipliers[selected]);

    const itemWithWeight = {
      ...item,
      selectedWeight: selected,
      price: updatedPrice,
    };

    dispatch(addToCart(itemWithWeight));
    setSnackbarOpen(true);
    setIsOpen(false);
  };

  return (
    <div id="Закуски">
      <Snackbar
        text={selected}
        textName={selectedCard ? selectedCard.name : "Товар"}
        open={snackbarOpen}
        handleClose={() => setSnackbarOpen(false)}
      />
      <StyledSnacksH1>Закуски</StyledSnacksH1>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width="1046px"
          height="434px"
        >
          <DIVMODAL>
            <div>
              <IMAGESCARD src={selectedCard?.images} alt="images" />
            </div>
            <div>
              <ModalH1>{selectedCard?.name}</ModalH1>
              <ModalP>{selectedCard?.desicription}</ModalP>
              <ToggleWrapper>
                {["7-8", "13-14", "19-20"].map((weight) => (
                  <div key={weight}>
                    <ToggleInput
                      type="radio"
                      id={weight}
                      name="weight"
                      value={weight}
                      checked={selected === weight}
                      onChange={() => setSelected(weight)}
                    />
                    <ToggleLabel htmlFor={weight} active={selected === weight}>
                      {weight} кг
                    </ToggleLabel>
                  </div>
                ))}
              </ToggleWrapper>

              <ButtonsDiv>
                <StyledH1>{updatedPrice} сом</StyledH1>
                <Button
                  variant="Добавить в корзину"
                  onClick={() => handleAddToCart(selectedCard)}
                >
                  Добавить в корзину
                </Button>
              </ButtonsDiv>
            </div>
          </DIVMODAL>
        </Modal>
      )}

      <CardAndGrillStyled>
        {dataArray?.map((element) => (
          <PRODUCTCARD key={element?.id}>
            <IMAGESTYLED
              src={element?.images}
              alt="images"
              onClick={() => handleCardClick(element)}
            />
            <NAMESTYLEDH1>{element?.name}</NAMESTYLEDH1>
            <TEXTPARAGRAP>{element?.desicription}</TEXTPARAGRAP>
            <PRICEANDBUTTONCONTAINER>
              <PRICE>
                <SPANTEXT>от</SPANTEXT> {element?.price} сом
              </PRICE>
              <BUTTONDIV>
                <Button
                  onClick={() => handleAddToCart(element)}
                  variant="добавить корзины"
                />
              </BUTTONDIV>
            </PRICEANDBUTTONCONTAINER>
          </PRODUCTCARD>
        ))}
      </CardAndGrillStyled>
    </div>
  );
};

export default CardSnacks;
