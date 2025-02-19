import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light vh-100 p-3"
      style={{ width: "200px" }}
    >
      <h5 className="text-center">My home</h5>
    </div>
  );
};

export default Sidebar;
