import React from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
