import React from "react";

const ProductCard = ({ brand, description, price, thumbnail, title, rating }) => {
  console.log(brand, "x", description, price, thumbnail, title);
  return (
    <div className="flex justify-between border-b w-3/4 p-5">
      <div>
        <div className="font-bold text-xl">
          {brand}
          <span className = "mx-2 font-light text-sm px-2 bg-yellow-100 border border-yellow-500 rounded-lg">{title}</span>
        </div>
        <p className = "w-10/12">{description}</p>
        <div className = "mb-2">$ {price}</div>
        <span className = "bg-indigo-100 px-2 py-1 rounded-lg">{rating} / 5</span>
      </div>
      <div>
        <div>
          <img src={thumbnail} alt={brand} className = "w-32 h-32 rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
