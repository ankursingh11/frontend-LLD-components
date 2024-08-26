import React, { useContext, useState } from "react";
import langContext from "../utils/langContext";

const Navbar = () => {
  const { lang, setLang } = useContext(langContext);

  return (
    <div className="p-5 shadow-lg flex justify-between content-center font-Bungee text-3xl">
      <div>Multi Language Support</div>

      <select
        className="p-3 text-sm border border-red-300 rounded-lg mr-4"
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="hi">Hindi</option>
        <option value="sp">Spanish</option>
      </select>
    </div>
  );
};

export default Navbar;
