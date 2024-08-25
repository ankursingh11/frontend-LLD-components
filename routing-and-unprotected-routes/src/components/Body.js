import React from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-10">
        <span className="bg-slate-200 rounded-lg p-3 text-center">
          In this application, the <code>'/about'</code> route is protected
        </span>
        <div className="my-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
