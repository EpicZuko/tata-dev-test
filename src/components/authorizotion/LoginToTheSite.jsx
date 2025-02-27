import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/slices/authSlice";
import styled from "styled-components";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

const LoginToSiteH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding: 40px 0px 32px 0px;
`;

const LoginToSiteInputContainer = styled.div`
  padding: 0px 0px 32px 40px;
`;

const LoginToSiteLabel = styled.label`
  display: block;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  padding: 0px 0px 16px 0px;
`;

const LoginToTheSite = ({ isOpen, setIsOpen }) => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (phone.length >= 9) {
      dispatch(login(phone));
      setIsOpen(false);
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <button onClick={() => setIsOpen(true)}>Открыть модалку</button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            width="475px"
            height="312px"
          >
            <LoginToSiteH1>Вход на сайт</LoginToSiteH1>
            <LoginToSiteInputContainer>
              <LoginToSiteLabel>Введите ваш номер телефона</LoginToSiteLabel>
              <Input
                variant="number"
                maxLength="9"
                placeholder="XXX-XXX-XXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </LoginToSiteInputContainer>
            <div>
              <Button
                variant="Войти"
                onClick={handleLogin}
                disabled={phone.length < 9}
              >
                Войти
              </Button>
            </div>
          </Modal>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default LoginToTheSite;
