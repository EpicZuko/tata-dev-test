import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../services/slices/CartSlice";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 82px;
  position: fixed;
  top: ${(props) => (props.isVisible ? "0" : "122px")};
  left: 0;
  z-index: 10040;
  transition: top 0.3s ease-in-out;
  padding: 0 20px;

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 768px) {
    height: 60px;
    top: ${(props) => (props.isVisible ? "0" : "120px")};
    padding: 0px;
    overflow-y: auto;
  }
`;

const StyledButton = styled.div`
  margin-right: 60px;
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  transform: ${(props) =>
    props.$visible ? "translateY(0)" : "translateY(-20px)"};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 24px;
  overflow-x: auto;
  white-space: nowrap;
  min-width: max-content;
  padding: 0 20px 0px 130px;
  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 12px;
    padding: 0px 0px 0px 18px;
  }
`;

const List = styled.li`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;

  &:hover {
    color: rgba(0, 145, 66, 1);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const HeaderList = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listArray = [
    { id: 1, name: "Гриль" },
    { id: 2, name: "Кебаб" },
    { id: 3, name: "Мучные изделия" },
    { id: 4, name: "Закуски" },
    { id: 5, name: "Салаты" },
    { id: 6, name: "Первые блюда" },
    { id: 7, name: "Вторые блюда" },
    { id: 8, name: "Напитки" },
  ];

  return (
    <StyledDiv isVisible={isScrolled}>
      <StyledUl>
        {listArray.map((element) => (
          <List key={element.id}>{element.name}</List>
        ))}
      </StyledUl>
      <StyledButton $visible={isScrolled}>
        <Button variant="Корзина" onClick={() => dispatch(toggleCart())}>
          Корзина {totalItems > 0 ? `${totalItems}` : ""}
        </Button>
      </StyledButton>
    </StyledDiv>
  );
};

export default HeaderList;
