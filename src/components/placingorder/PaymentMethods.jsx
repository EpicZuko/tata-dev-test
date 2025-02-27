import React from "react";
import { styled } from "@mui/material/styles";
import styles from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from "../UI/Input";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
    ...theme.applyStyles("dark", {
      backgroundColor: "#30404d",
    }),
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#394b59",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "rgba(0, 145, 66, 1)",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(0, 145, 66, 1)",
  },
});

const StyledPayments = styles.div`
  width: 536px;
  height: 285px;
  border-radius: 30px;
  background: rgba(247, 247, 247, 1);
  padding: 40px 0px 0px 40px;
  @media (max-width: 450px) {
  width: 428px;
  height: 285px;
  border-radius: 30px;
  padding: 20px 0px 0px 20px;
  }
  @media (max-width: 450px) {
  width: 368px;
  height: 285px;
  border-radius: 30px;
  padding: 20px 0px 0px 20px;
  margin-left: 10px;
  }

`;
const StyledPaymentsH1 = styles.h1`
font-family: Nunito Sans;
font-weight: 700;
font-size: 20px;
line-height: 28px;
padding: 0px 0px 10px 0px;
`;
const StyledPaymentsText = styles.p`
font-family: Nunito Sans;
font-weight: 500;
font-size: 16px;
leading-trim: Cap height;
line-height: 22.4px;
letter-spacing: 4%;
color:rgba(127, 127, 127, 1);
padding: 20px 0px 10px 0px;
`;
const StyledPaymentsDiv = styles.div`
padding: 0px 0px 24px 0px;
@media (max-width: 380px) {
width: 328px;
}
`;
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function PaymentMethods() {
  return (
    <StyledPayments>
      <StyledPaymentsH1>Способы оплаты</StyledPaymentsH1>
      <FormControl>
        <RadioGroup
          defaultValue="female"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <FormControlLabel
            value="female"
            control={<BpRadio />}
            label="Наличными курьеру"
          />
          <StyledPaymentsText>
            С какой суммы подготовить сдачу?
          </StyledPaymentsText>
          <StyledPaymentsDiv>
            <Input variant="getamount" placeholder="Введите сумму" />
          </StyledPaymentsDiv>
          <FormControlLabel
            value="male"
            control={<BpRadio />}
            label="Онлайн-банкинг"
          />
        </RadioGroup>
      </FormControl>
    </StyledPayments>
  );
}
