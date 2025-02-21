import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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
  width: 300px;
  height: 36px;
  justify-content: space-between;
  @media (max-width: 428px) {
    width: 380px;
    height: 36px;
    justify-content: space-between;
    line-height: 28px;
  }
`
const BUTTONDIV = styled.div`
  padding: 30px 0px 0px 0px;
`
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
`
const SPANTEXT = styled.span`
  display: none;
  @media (max-width: 428px) {
    display: block;
  }
`
const CardSnacks = ({ dataArray, onClick }) => {
  return (
    <CardAndGrillStyled>
      {dataArray?.map((element) => (
        <PRODUCTCARD key={element?.id}>
          <IMAGESTYLED src={element?.images} alt='images' />
          <NAMESTYLEDH1>{element?.name}</NAMESTYLEDH1>
          <TEXTPARAGRAP>{element?.desicription}</TEXTPARAGRAP>
          <PRICEANDBUTTONCONTAINER>
            <PRICE>
              <SPANTEXT>от</SPANTEXT> {element?.price} сом
            </PRICE>
            <BUTTONDIV>
              <Button onClick={onClick} variant='добавить корзины' />
            </BUTTONDIV>
          </PRICEANDBUTTONCONTAINER>
        </PRODUCTCARD>
      ))}
    </CardAndGrillStyled>
  )
}

export default CardSnacks
