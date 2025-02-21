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
const CardAndGrill = ({ dataArray, onClick }) => {
  return (
    <CardAndGrillStyled>
      {dataArray?.map((element) => (
        <PRODUCTCARD key={element?.id}>
          <IMAGESTYLED src={element?.images} alt='images' />
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
  )
}

export default CardAndGrill
