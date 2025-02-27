import React from "react";
import styled from "styled-components";
import menu from "../../assets/icons/IconView.svg";
import contacts from "../../assets/icons/IconView (1).svg";
import basket from "../../assets/icons/Vector (16).svg";
import user from "../../assets/icons/IconView (2).svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../services/slices/CartSlice";
import { useNavigate, useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  display: none;
  @media (max-width: 450px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    z-index: 1000;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: gray;
      position: relative;
      cursor: pointer;
      transition: color 0.2s ease-in-out;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .active {
      color: green;
      font-weight: bold;
    }

    .cart-badge {
      position: relative;
    }

    .cart-badge .badge {
      position: absolute;
      top: -5px;
      right: -10px;
      background: red;
      color: white;
      font-size: 12px;
      font-weight: bold;
      width: 18px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
`;

const MobileFooter = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <StyledFooter>
      <div
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        <img src={menu} alt="menu" />
        <span>Меню</span>
      </div>
      <div
        className={location.pathname === "/contacts" ? "active" : ""}
        onClick={() => navigate("/contacts")}
      >
        <img src={contacts} alt="contacts" />
        <span>Контакты</span>
      </div>
      <div
        className={`cart-badge ${
          location.pathname === "/cart" ? "active" : ""
        }`}
        onClick={() => dispatch(toggleCart())}
      >
        <img src={basket} alt="basket" />
        <span>Корзина</span>
        {totalItems > 0 ? <span className="badge">{totalItems}</span> : ""}
      </div>
      <div
        className={location.pathname === "/profile" ? "active" : ""}
        onClick={() => navigate("/profile")}
      >
        <img src={user} alt="user" />
        <span>Профиль</span>
      </div>
    </StyledFooter>
  );
};

export default MobileFooter;
