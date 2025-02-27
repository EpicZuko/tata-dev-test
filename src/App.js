import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import OrderForm from "./components/placingorder/OrderForm";
import Header from "./components/header/Header";
import NotFoundPage from "./pages/NotFoundPage";
import MobileFooter from "./components/mobile-footer/MobileFooter";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <MobileFooter />
    </div>
  );
};

export default App;
