import React from 'react'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'
import { cardAds, CartdAdsAutoPlay } from '../../utils/constants/URL'
import Button from './Button'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 407px;
  border-radius: 40px;
  margin: auto;
  @media (max-width: 450px) {
    margin: auto;
    height: 150px;
  }
  .react-multiple-carousel__arrow {
    background-color: rgba(255, 255, 255, 1);
    border: none;
    color: rgba(0, 145, 66, 1) !important;
    font-size: 30px;
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
  }
  .react-multiple-carousel__arrow::before {
    color: rgba(0, 145, 66, 1) !important;
  }
  .react-multiple-carousel__arrow--left {
    left: 10px;
    &:hover {
      background: rgba(0, 111, 51, 1);
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: 10px;
    &:hover {
      background: rgba(0, 111, 51, 1);
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
`

const DIVIMAGESTYLED = styled.div`
  position: relative;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    position: relative;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 407px;
  border-radius: 40px;
  object-fit: cover;
  background-repeat: no-repeat;
  @media (max-width: 450px) {
    width: 400px;
    height: 117px;
    border-radius: 11px;
  }
`
const StyledH1 = styled.h1`
  position: absolute;
  top: 85px;
  left: 85px;
  color: white;
  width: 314px;
  z-index: 10;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 76.46px;
  line-height: 65px;
  @media (max-width: 450px) {
    width: 118px;
    height: 45px;
    top: 23px;
    left: 33px;
    font-weight: 700;
    font-size: 28.67px;
    line-height: 24.66px;
  }
`

const StyledButton = styled.div`
  position: absolute;
  top: 257px;
  left: 85px;
  z-index: 10;
  @media (max-width: 450px) {
    display: none;
  }
`
export default function CardAds({ dataArray }) {
  return (
    <Wrapper>
      <Carousel
        responsive={cardAds}
        autoPlay={CartdAdsAutoPlay.autoPlay}
        autoPlaySpeed={CartdAdsAutoPlay.autoPlaySpeed}
        infinite={CartdAdsAutoPlay.infinite}
      >
        {dataArray.map((element) => (
          <DIVIMAGESTYLED>
            <StyledImage src={element.images} alt='images' />
            <StyledH1>{element.name}</StyledH1>
            <StyledButton>
              <Button variant='Заказать онлайн'>Заказать онлайн</Button>
            </StyledButton>
          </DIVIMAGESTYLED>
        ))}
      </Carousel>
    </Wrapper>
  )
}
