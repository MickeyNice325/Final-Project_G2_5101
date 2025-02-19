import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center mt-3" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "15px" }}>
      <div className="container">
        {/* วิดีโอ */}
       
          <video width="100%" height="auto" controls autoPlay>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        {/* โซนสินค้า */}
        <div className="p-4 shadow-lg mt-4">
          <div className="row text-center">
            <div className="col-md-4">
              <img src="flower1.jpg" className="img-fluid" alt="Flower 1" />
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </div>
            <div className="col-md-4">
              <img src="flower2.jpg" className="img-fluid" alt="Flower 2" />
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </div>
            <div className="col-md-4">
              <img src="flower3.jpg" className="img-fluid" alt="Flower 3" />
              <h5 className="mt-2">Name Flower</h5>
              <p>100 Baht</p>
            </div>
          </div>
        </div>

        {/* โซนสมาชิก */}
       
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
  );
};

export default Home;
