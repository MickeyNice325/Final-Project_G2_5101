import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า

  return (

     
        <div className="card shadow mt-3 ms-3" style={{ width: "105rem", height: "54rem" }}>
          <div className="card-body d-flex flex-column justify-content-center text-center">
            <div className='container w-50'>
                <h3 className="mb-4 fw-bold">LOGIN</h3>
                <div className="d-flex justify-content-center mb-3">
                    <input
                        type="text"
                        className="form-control shadow"
                        placeholder="Username"
                        
                    />
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <input
                        type="password"
                        className="form-control shadow"
                        placeholder="Password"
                        
                    />
                </div>
                <div className=" mt-4 d-flex justify-content-end">
                    <button 
                        className="btn btn-primary me-2 "
                        style={{ backgroundColor: "#7D4BB1", borderColor: "#7D4BB1" }}
                        onClick={() => navigate("/register")} // กดแล้วไปหน้า Register
                    >
                        Register
                    </button>
                    <button className="btn btn-light text-white" style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }}>
                        LOGIN
                    </button>
                </div>
            </div>
          </div>
        </div>


  );
};

export default Login;
