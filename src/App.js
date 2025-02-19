import React from "react";
import "./App.css";
import Sizebar from "./other/sizebar.js";
import Home from "./Page/home.js";

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar (ซ้าย) */}
      <div className="position-fixed vh-100" style={{ width: "200px" }}>
        <Sizebar />
      </div>

      {/* ส่วนเนื้อหา (ขวา) */}
      <div className="flex-grow-1" style={{ marginLeft: "200px" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
