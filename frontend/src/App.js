import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Page/register";
import Login from "./Page/login";
import Home from "./Page/home";
import Cart from "./Page/cart";
import Pay from "./Page/pay";
import Order from "./Page/order";
import Flowers from "./Page/flowers";
import Sidebar from "./other/sizebar";
import Admin from "./Page/admin"; // ✅ Import admin panel
import { jwtDecode } from "jwt-decode"; // ใช้ jwt-decode แบบ named import

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.status); // ดึง role ของผู้ใช้
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        setToken(null);
      }
    }
  }, [token]);

  const PrivateRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" />;
  };

  const AdminRoute = ({ element }) => {
    return token && userRole === "admin" ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 p-3">
              <Sidebar token={token} userRole={userRole} />
            </div>
            <div className="col-md-10 p-3">
              <div className="card">
                <div className="card-body">
                  <Routes>
                    <Route path="/" element={<Home token={token} />} />
                    <Route path="/flowers" element={<Flowers token={token} />} />
                    <Route path="/cart" element={<PrivateRoute element={<Cart token={token} />} />} />
                    <Route path="/pay" element={<PrivateRoute element={<Pay token={token} />} />} />
                    <Route path="/order" element={<PrivateRoute element={<Order token={token} />} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/admin" element={<AdminRoute element={<Admin />} />} /> {/* ✅ ใช้ Route admin */}
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
