import React from "react";
import styled from "styled-components";
import imagesfooter from "../../assets/icons/logofooter.svg";
import instagram from "../../assets/icons/ic_instagram.svg";
import whatsapp from "../../assets/icons/ic_whatsapp.svg";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 431px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  padding: 48px 153px 0px 60px;
  margin-top: auto;
`;
const StyledFooterH1Delivery = styled.h1`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 0px 28px 0px;
`;
const StyledFooterPrivacyPolicyH2 = styled.h2`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 0px 28px 0px;

`;
const StyledFooterAboutUsH3 = styled.h3`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledFooterContactsH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  padding: 0px 0px 32px 0px;
`;
const StyledFooterNumber = styled.h2`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 0px 20px 0px;
`;
const StyledFooterEmail = styled.h3`
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledFooterAddress = styled.h4`
  width: 312px;
  height: 42px;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 28px 0px 0px 0px;
`;
const StyledFooterSocialMedia = styled.h1`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  padding: 0px 0px 32px 0px;
`; 
const StyledFooterSocial = styled.div`
    display: flex;
    gap: 18px;
`
const Footer = () => {
  return (
    <StyledWrapper>
      <StyledFooter>
        <div>
          <img src={imagesfooter} alt="logo footer" />
        </div>
        <div>
          <StyledFooterH1Delivery>Доставка</StyledFooterH1Delivery>
          <StyledFooterPrivacyPolicyH2>
            Политика конфиденциальности
          </StyledFooterPrivacyPolicyH2>
          <StyledFooterAboutUsH3>О нас</StyledFooterAboutUsH3>
        </div>
        <div>
          <StyledFooterContactsH1>Контакты</StyledFooterContactsH1>
          <StyledFooterNumber>+996 123-456-789</StyledFooterNumber>
          <StyledFooterEmail>electro@pochta.com</StyledFooterEmail>
          <StyledFooterAddress>
            г. Бишкек, ул. Садырбаева 127 / Ахунбаева
          </StyledFooterAddress>
        </div>
        <div>
          <StyledFooterSocialMedia>Социальные сети</StyledFooterSocialMedia>
          <StyledFooterSocial>
            <img src={instagram} alt="instagram" />
            <img src={whatsapp} alt="whatsapp" />
          </StyledFooterSocial>
        </div>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Footer;
