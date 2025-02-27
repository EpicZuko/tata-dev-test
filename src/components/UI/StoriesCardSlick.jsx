import React, { useState } from "react";
import Stories from "react-insta-stories";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { storiesCard } from "../../utils/constants/URL";

const Wrapper = styled.div`
  max-width: 1320px;
  margin: auto;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 100px 0px 100px 0px;
  @media (max-width: 450px) {
    padding: 64px 0px 24px 0px;
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
    @media (max-width: 430px) {
      display: none;
    }
  }
  .react-multiple-carousel__arrow--right {
    right: 10px;
    &:hover {
      background: rgba(0, 111, 51, 1);
    }
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
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
`;

const IMAGES = styled.img`
  width: 200px;
  height: 241px;
  border-radius: 40px;
  background-color: rgba(0, 145, 66, 1);
  background-image: cover;
  cursor: pointer;
  @media (max-width: 430px) {
    width: 101px;
    background-color: rgba(0, 145, 66, 1);
    height: 121px;
  }
`;

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
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110000;
  img {
    object-fit: cover;
    width: 400px !important;
    height: 600px !important;
  }
  @media (max-width: 450px) {
    padding-top: 130px;
    top: 0;
    left: 0px;
    align-items: normal;
  }
`;

const ModalContent = styled.div`
  background: white;
  width: 400px;
  height: 606px;
  border-radius: 42.88px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1000;
`;
const StoriesCardSlick = ({ dataArrayCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stories, setStories] = useState([]);

  const handleStoryClick = (index) => {
    const formattedStories = dataArrayCard.map((item) => ({
      url: item?.images,
      header: {
        heading: item?.name,
      },
    }));

    const reorderedStories = [
      ...formattedStories.slice(index),
      ...formattedStories.slice(0, index),
    ];

    setStories(reorderedStories);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <Stories
              stories={stories}
              defaultInterval={1500}
              width="100%"
              height="100%"
              loop
            />
          </ModalContent>
        </ModalOverlay>
      )}
      <Wrapper>
        <Carousel responsive={storiesCard}>
          {dataArrayCard?.map((element, index) => (
            <StoriesContainer
              key={element?.id}
              onClick={() => handleStoryClick(index)}
            >
              <IMAGES src={element.images} alt="images" />
              <TEXTH1>{element.name}</TEXTH1>
            </StoriesContainer>
          ))}
        </Carousel>
      </Wrapper>
    </>
  );
};

export default StoriesCardSlick;
