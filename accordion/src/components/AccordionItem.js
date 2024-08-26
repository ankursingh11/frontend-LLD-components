import React from "react";

const AccordionItem = ({ title, desc, last, open, setOpen }) => {
  console.log(last);
  return (
    <div className={"p-3 " + (!last ? "border-b border-black" : "")}>
      <div className="flex justify-between cursor-pointer" onClick = {() => setOpen(!open)}>
        <div className="font-semibold">{title}</div>
        {open ? <div>⬇️</div> : <div>⬆️</div>}
      </div>
      {open && <div>{desc}</div>}
    </div>
  );
};

export default AccordionItem;
