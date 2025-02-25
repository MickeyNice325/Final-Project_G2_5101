import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sizebar from "./other/sizebar.js";
import Home from "./Page/home.js";
import Register from "./Page/register.js";
import Flowers from "./Page/flowers.js";
import Cart from "./Page/cart.js";
import Login from "./Page/login.js";
import Order from "./Page/order.js";
import Pay from "./Page/pay.js";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        {/* Sidebar (ซ้าย) */}
        <div className="position-fixed vh-100" style={{ width: "200px" }}>
          <Sizebar />
        </div>

        {/* ส่วนเนื้อหา (ขวา) */}
        <div className="flex-grow-1" style={{ marginLeft: "200px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/order" element={<Order />} /> 
            <Route path="/Register" element={<Register />} />
            <Route path="/pay" element={<Pay />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
