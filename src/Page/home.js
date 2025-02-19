import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center mt-3" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" }}>
      <div className="container">
        {/* วิดีโอ */}
        <div className="p-3 shadow-lg">
          <video width="100%" height="auto" controls autoPlay>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* โซนสินค้า */}
        <div className="card p-4 shadow-lg mt-4">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow p-3">
                <img src="flower1.jpg" className="card-img-top" alt="Flower 1" />
                <div className="card-body">
                  <h5 className="card-title">Name Flower</h5>
                  <p className="card-text">100 Baht</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow p-3">
                <img src="flower2.jpg" className="card-img-top" alt="Flower 2" />
                <div className="card-body">
                  <h5 className="card-title">Name Flower</h5>
                  <p className="card-text">100 Baht</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow p-3">
                <img src="flower3.jpg" className="card-img-top" alt="Flower 3" />
                <div className="card-body">
                  <h5 className="card-title">Name Flower</h5>
                  <p className="card-text">100 Baht</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* โซนสมาชิก */}
        <div className="card p-4 shadow-lg mt-4">
          <h4 className="text-center">สมาชิก</h4>
          <div className="row text-center">
            <div className="col-md-3">
              <img src="member1.jpg" className="img-fluid" alt="Member 1" />
              <p>บิว 04</p>
            </div>
            <div className="col-md-3">
              <img src="member2.jpg" className="img-fluid" alt="Member 2" />
              <p>บัว 05</p>
            </div>
            <div className="col-md-3">
              <img src="member3.jpg" className="img-fluid" alt="Member 3" />
              <p>ตัว 16</p>
            </div>
            <div className="col-md-3">
              <img src="member4.jpg" className="img-fluid" alt="Member 4" />
              <p>บัว 26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
