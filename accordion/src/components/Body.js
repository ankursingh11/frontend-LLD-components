import React, { useState } from "react";
import { DATA } from "../config/accordionData";
import AccordionItem from "./AccordionItem";
import grid from "../grid.jpg";

const Body = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="flex flex-col pt-10 mx-auto bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 h-screen" >
      <div className="font-bold text-2xl text-center mb-5">faq</div>
      <div className="border border-black rounded-lg p-5 w-6/12 mx-auto">
        {DATA.map((ele, i) => (
          <AccordionItem
            {...ele}
            last={i === DATA.length - 1}
            open={openIndex === i}
            setOpen={() =>
              openIndex === i ? setOpenIndex(null) : setOpenIndex(i)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
