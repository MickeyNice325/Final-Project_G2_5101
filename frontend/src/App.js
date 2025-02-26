import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Page/register";
import Login from "./Page/login";
import Home from "./Page/home";
import Cart from "./Page/cart";
import Pay from "./Page/pay";
import Order from "./Page/order";
import Sidebar from "./other/sizebar";
import Flowers from "./Page/flowers"; // นำเข้า Flowers.js

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const PrivateRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 p-3">
              <Sidebar token={token} /> {/* ส่ง token ไปที่ Sidebar */}
            </div>

            <div className="col-md-10 p-3">
              <div className="card"> {/* เปลี่ยนจาก class เป็น className */}
                <div className="card-body"> {/* เปลี่ยนจาก class เป็น className */}
                  <Routes>
                    <Route path="/" element={<Home token={token} />} />
                    <Route path="/flowers" element={<Flowers token={token} />} /> {/* เส้นทางสำหรับ All flower */}
                    <Route path="/cart" element={<PrivateRoute element={<Cart token={token} />} />} />
                    <Route path="/pay" element={<PrivateRoute element={<Pay token={token} />} />} />
                    <Route path="/order" element={<PrivateRoute element={<Order token={token} />} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                  </Routes>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
