import React from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { CartdAdsAutoPlay, popularCard } from "../../utils/constants/URL";

const Wrapper = styled.div`
  max-width: 1320px;
  margin: auto;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 100px 0px;
  @media (max-width: 450px) {
    padding: 0px 10px 0px 10px;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .react-multiple-carousel__arrow {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 145, 66, 0.1);
    border: none;
    color: rgba(0, 145, 66, 1) !important;
    font-size: 30px;
  }
  .react-multiple-carousel__arrow::before {
    color: rgba(0, 145, 66, 1) !important;
  }
  .react-multiple-carousel__arrow--left {
    left: 4px;
    &:hover {
      background: rgba(0, 111, 51, 1);
    }
    @media (max-width: 430px) {
      display: none;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: 22px;
    &:hover {
      background: rgba(0, 111, 51, 1);
    }
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
const DIVMOSTPOPULAR = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  background-color: rgba(247, 247, 247, 1);
  width: 424px;
  height: 187px;
  border-radius: 30px;
  @media (max-width: 450px) {
    width: 410px;
    height: 127px;
    border-radius: 20px;
  }
`;
const PopularImages = styled.img`
  width: 154px;
  height: 130px;
  border-radius: 30px;
  margin-left: 40px;
  @media (max-width: 450px) {
    width: 104px;
    height: 100px;
  }
`;
const PopularH1 = styled.h1`
  color: rgba(54, 54, 54, 1);
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 22.4px;
  }
`;
const PopularSpan = styled.span`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: rgba(127, 127, 127, 1);
  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 19.6px;
  }
`;
const StyledPopularH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 40px;
  line-height: 34.4px;
  padding: 60px 0px 48px 100px;
  @media (max-width: 450px) {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0%;
    padding: 0px 0px 28px 20px;
  }
`;
const CardMostPopular = ({ dataArray }) => {
  return (
    <>
      <StyledPopularH1>Самое популярное</StyledPopularH1>
      <Wrapper>
        <Carousel
          responsive={popularCard}
          autoPlay={CartdAdsAutoPlay.autoPlay}
          autoPlaySpeed={CartdAdsAutoPlay.autoPlaySpeed}
          infinite={CartdAdsAutoPlay.infinite}
        >
          {dataArray?.map((element) => (
            <DIVMOSTPOPULAR>
              <div>
                <PopularImages src={element.images} alt="images" />
              </div>
              <div>
                <PopularH1>{element.name}</PopularH1>
                <PopularSpan>от {element.price} сом</PopularSpan>
              </div>
            </DIVMOSTPOPULAR>
          ))}
        </Carousel>
      </Wrapper>
    </>
  );
};

export default CardMostPopular;
