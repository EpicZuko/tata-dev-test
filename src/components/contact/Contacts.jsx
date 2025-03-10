import React from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* min-height: 100vh; */
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 32px;
  line-height: 86%;
  letter-spacing: 0%;
`;

const Text = styled.p`
  margin: 5px 0;
  color: #333;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 4%;
  & strong {
    font-family: Nunito Sans;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    letter-spacing: 4%;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Icon = styled.a`
  font-size: 24px;
  color: black;
  transition: 0.3s;
  &:hover {
    color: #555;
  }
`;

const ContactPage = () => {
  return (
    <Container>
      <Card>
        <Title>Контакты</Title>
        <Text>Звоните и заказывайте</Text>
        <Text>
          <strong>+996 508 842 444</strong>
        </Text>
        <Text>Электронная почта</Text>
        <Text>
          <strong>electro@pochta.com</strong>
        </Text>
        <Text>Адрес</Text>
        <Text>
          <strong>г. Бишкек, ул. Садырабаева 127 / Ахунбаева</strong>
        </Text>
        <Text>Социальные сети</Text>
        <SocialIcons>
          <Icon href="#">
            <FaInstagram />
          </Icon>
          <Icon href="#">
            <FaWhatsapp />
          </Icon>
        </SocialIcons>
      </Card>
    </Container>
  );
};

export default ContactPage;
