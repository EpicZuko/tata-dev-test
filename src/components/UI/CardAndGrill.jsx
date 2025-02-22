import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Modal from './Modal'

const CardAndGrillStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`
const PRODUCTCARD = styled.div`
  background-color: rgba(247, 247, 247, 1);
  width: 312px;
  height: 353px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  @media (max-width: 428px) {
    width: 388px;
    height: 399px;
  }
`
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
`
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
`
const TEXTPARAGRAP = styled.p`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  padding-left: 16px;
`
const PRICEANDBUTTONCONTAINER = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 36px;
  justify-content: space-between;
  padding: ${(props) =>
    props.price > 0 ? '5px 16px 0px 16px' : '45px 16px 0px 16px'};
  @media (max-width: 428px) {
    width: 356px;
    height: 36px;
    justify-content: space-between;
    line-height: 28px;
  }
`
const PRICE = styled.h3`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`
const PRICEDISCOUNT = styled.h3`
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  text-decoration: line-through;
  padding: 20px 0px 0px 16px;
`
const MODALCONT = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`
const DIVMODAL = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
`

const IMAGESCARD = styled.img`
  width: 523px;
  height: 434px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
const ModalH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  color: rgba(54, 54, 54, 1);
  margin-left: 36px;
  margin: 36px 0px 20px 36px;
  margin-top: 36px;
`
const ModalP = styled.p`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(127, 127, 127, 1);
  margin: 0px 0px 20px 36px;
`
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 45px;
  padding: 20px;
  width: 401px;
  height: 56px;
  margin: 0px 0px 120px 36px;
`

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
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`
const ButtonsDiv = styled.div`
  margin: 0px 0px 0px 36px;
`
const ToggleInput = styled.input`
  display: none;
`
const StyledH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: 0px 0px 20px 0px;
`
const CardAndGrill = ({ dataArray, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('13-14 кг')
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsOpen(true)
  }

  return (
    <>
      <MODALCONT>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width='1046px'
          height='434px'
        >
          {selected && (
            <DIVMODAL>
              <div>
                <IMAGESCARD src={selectedCard?.images} alt='images' />
              </div>
              <div>
                <ModalH1>{selectedCard?.name}</ModalH1>
                <ModalP>{selectedCard?.desicription}</ModalP>
                <ToggleWrapper>
                  {['7-8 кг', '13-14 кг', '19-20 кг'].map((weight) => (
                    <div key={weight}>
                      <ToggleInput
                        type='radio'
                        id={weight}
                        name='weight'
                        value={weight}
                        checked={selected === weight}
                        onChange={() => setSelected(weight)}
                      />
                      <ToggleLabel
                        htmlFor={weight}
                        active={selected === weight}
                      >
                        {weight}
                      </ToggleLabel>
                    </div>
                  ))}
                </ToggleWrapper>

                <ButtonsDiv>
                  <StyledH1>{selectedCard?.price} сом</StyledH1>
                  <Button variant='Добавить в корзину'>
                    Добавить в корзину
                  </Button>
                </ButtonsDiv>
              </div>
            </DIVMODAL>
          )}
        </Modal>
      </MODALCONT>

      <CardAndGrillStyled>
        {dataArray?.map((element) => (
          <PRODUCTCARD key={element?.id}>
            <IMAGESTYLED
              src={element?.images}
              alt='images'
              onClick={() => handleCardClick(element)}
            />
            <NAMESTYLEDH1>{element?.name}</NAMESTYLEDH1>
            <TEXTPARAGRAP>{element?.desicription}</TEXTPARAGRAP>
            {element.discount && (
              <PRICEDISCOUNT>от {element?.discount} сом</PRICEDISCOUNT>
            )}
            <PRICEANDBUTTONCONTAINER price={element.discount}>
              <PRICE>от {element?.price} сом</PRICE>
              <div>
                <Button onClick={onClick} variant='добавить корзины' />
              </div>
            </PRICEANDBUTTONCONTAINER>
          </PRODUCTCARD>
        ))}
      </CardAndGrillStyled>
    </>
  )
}

export default CardAndGrill
