import React from 'react'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

const Wrapper = styled.div`
  max-width: 1320px;
  margin: auto;
  display: block;
  align-items: center;
  justify-content: center;
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
    @media (max-width: 430px) {
      display: none;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: 10px;
    @media (max-width: 430px) {
      display: none;
    }
  }
`
const StoriesContainer = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px 30px 0px 20px;
  @media (max-width: 430px) {
    margin: 0px 0px 0px 0px;
  }
`

const IMAGES = styled.img`
  width: 200px;
  height: 241px;
  border-radius: 40px;
  background-color: rgba(0, 145, 66, 1);
  @media (max-width: 430px) {
    width: 101px;
    background-color: rgba(0, 145, 66, 1);
    height: 121px;
  }
`

const TEXTH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  color: black;
  @media (max-width: 430px) {
    width: 91px;
    color: black;
    margin-top: 0px;
    font-size: 12.02px;
  }
`

const StoriesCardSlick = ({ dataArrayCard, onClick }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobileLarge: {
      breakpoint: { max: 428, min: 320 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  }

  return (
    <Wrapper>
      <Carousel responsive={responsive}>
        {dataArrayCard?.map((element) => (
          <StoriesContainer key={element?.id} onClick={onClick}>
            <IMAGES src={element?.images} alt='images' />
            <TEXTH1>{element?.name}</TEXTH1>
          </StoriesContainer>
        ))}
      </Carousel>
    </Wrapper>
  )
}

export default StoriesCardSlick
