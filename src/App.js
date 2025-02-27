import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import OrderForm from './components/placingorder/OrderForm'
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderForm/>} />
        <Route path="*" element={<h1>hello</h1>} />
      </Routes>
    </div>
  );
};

export default App;
