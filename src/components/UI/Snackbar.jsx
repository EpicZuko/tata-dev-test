import React from "react";
import { Snackbar as MuiSnackbar, Alert, Typography, Box } from "@mui/material";
import styled from "styled-components";

const StyledTobarH1 = styled.h1`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 0px 0px 6px 0px;
`;
const StyledTextDiv = styled.div`
  display: flex;
  gap: 10px;
  span {
    font-family: Nunito;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0px;
    color: rgba(127, 127, 127, 1);
  }
`;
const Snackbar = ({ open, handleClose, text, textName }) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        zIndex: 130900,
        transform: "translateY(60px)",
      }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
          color: "black",
          boxShadow: 3,
          borderRadius: 2,
          padding: 2,
          border: "1px solid rgba(0, 145, 66, 1)",
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight="bold">
            <StyledTobarH1>Товар добавлен в корзину</StyledTobarH1>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <StyledTextDiv>
              <span>{text}</span>
              <span>{textName}</span>
            </StyledTextDiv>
          </Typography>
        </Box>
      </Alert>
    </MuiSnackbar>
  );
};
export default Snackbar;
