import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 shadow-lg flex justify-between content-center font-Bungee text-3xl">
      <div>Routing and Unprotected Routes</div>
      <div>
        <ul className="flex text-xl">
          <li className="mx-2 cursor-pointer hover:drop-shadow-xl">
            <Link to="/about">About</Link>
          </li>

          <li className="mx-2 cursor-pointer hover:drop-shadow-xl">
            <Link to="/contact"> Contact</Link>
          </li>

          <li className="mx-2 cursor-pointer hover:drop-shadow-xl">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
