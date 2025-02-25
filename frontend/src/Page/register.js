import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="card p-4 shadow-lg mt-3 ms-3" style={{ width: "105rem", height: "54rem" }}>
      <h3 className="text-center fw-bold mb-3 mt-5">Register</h3>
      <div className="container w-50">
        <form>
          <div className="mb-2">
            <input type="text" className="form-control shadow" placeholder="Username" />
          </div>
          <div className="mb-2">
            <input type="password" className="form-control shadow mt-3" placeholder="Password" />
          </div>

          <div className="row mb-2 g-2">  
            <div className="col">
              <input type="text" className="form-control shadow mt-3" placeholder="Firstname" />
            </div>
            <div className="col">
              <input type="text" className="form-control shadow mt-3" placeholder="Lastname" />
            </div>
          </div>

          <div className="row mb-2 g-2">
            <div className="col-4">
              <input type="number" className="form-control shadow mt-3" placeholder="Age" />
            </div>
            <div className="col">
              <input type="date" className="form-control shadow mt-3" />
            </div>
          </div>

          <div className="mb-2">
            <textarea className="form-control shadow mt-3 " rows="3" placeholder="Address"></textarea>
          </div>

          <div className="mb-2">
            <input type="tel" className="form-control shadow mt-3" placeholder="Phone" />
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-light me-2 mt-3 text-white" style={{ backgroundColor: "#D1B3FF", borderColor: "#D1B3FF" }} onClick={() => navigate("/login")}>
              LOGIN
            </button>
            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: "#7D4BB1", borderColor: "#7D4BB1" }}>
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
