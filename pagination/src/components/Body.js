import React, { useEffect, useState } from "react";
import { API, LIMIT } from "../constants/constant";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      API.replace("PAGE_LIMIT", LIMIT).replace(
        "PAGE_NUMBER",
        currentPage * LIMIT
      )
    );
    const json = await response.json();
    setProducts(json.products);
    setTotalPages(Math.ceil(json?.total / LIMIT));
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="p-4 flex flex-col items-center">
      {products.map((p) => (
        <ProductCard id={p.id} {...p} />
      ))}

      {/* Pagination */}
      <div className="p-10">
        {currentPage > 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="mx-2 hover:-translate-x-1 transition-all cursor-pointer"
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          />
        )}

        {[
          ...Array(totalPages)
            .keys()
            .map((p) => (
              <span
                className={
                  "mx-2 cursor-pointer" +
                  (p === currentPage ? " font-bold text-lg" : "")
                }
                onClick={() => setCurrentPage((currentPage) => p)}
              >
                {p + 1}
              </span>
            )),
        ]}
        {currentPage < totalPages - 1 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-2 hover:translate-x-1 transition cursor-pointer"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Body;
