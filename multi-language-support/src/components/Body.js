import React, { useContext } from "react";
import { LANGUAGE } from "../config/language";
import langContext from "../utils/langContext";

const Body = () => {
  const { lang } = useContext(langContext);
  const content = LANGUAGE[lang];

  return (<div className="p-5">
    <div className = "flex flex-col gap-8">
        <div>
            <h1 className = "mb-3 font-Bungee drop-shadow-lg text-2xl">{content.title}</h1>
            <p className = "w-8/12">{content.desc}</p>
        </div>
        <div>
            <h1 className = "mb-3 font-Bungee drop-shadow-lg text-2xl">{content.title1}</h1>
            <p className = "w-8/12">{content.desc1}</p>
        </div>
        
    </div>
  </div>);
};

export default Body;
