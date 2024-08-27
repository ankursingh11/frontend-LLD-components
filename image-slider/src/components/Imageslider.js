import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DATA } from "../config/images_data";

const Imageslider = () => {
  const [currIndex, setIndex] = useState(0);

  useEffect(()=>{
    let intervalId = setInterval(() => {
        nextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  })

  function prevImage() {
    setIndex(index => index-1<0?DATA.length-1:index-1);
  }

  function nextImage() {
    setIndex(index => (index+1)%DATA.length)
  }

  const imgDetails = DATA[currIndex];
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-purple-100 to-red-100 h-screen">
      <div className="p-5 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="mx-4 w-10 h-10 cursor-pointer hover:-translate-x-2 transition-all relative left-[5rem] text-white"
          onClick={prevImage}
        />
        <img
          alt="bg-image"
          src={imgDetails.src}
          className="w-[60rem] h-[35rem] rounded-lg shadow-lg"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="mx-4 w-10 h-10 cursor-pointer hover:translate-x-2 transition-all relative right-[5rem] text-white"
          onClick={nextImage}
        />
      </div>
      <div className = "mx-5 mt-8">
        <div className = "text-3xl font-bold">{imgDetails.title}</div>
        <div>Resolutions for download : {imgDetails.availableRes}</div>
      </div>
    </div>
  );
};

export default Imageslider;
