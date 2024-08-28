import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { SEARCH_API } from "../constants/constant";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[searchQuery]) {
      setSearchResult(cache[searchQuery]);
      return;
    } else {
      const response = await fetch(SEARCH_API + searchQuery);
      const json = await response.json();
      setSearchResult(json[1]);
      setCache({ ...cache, [searchQuery]: json[1] });
    }
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      fetchData();
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  return (
    <div className="m-5 flex flex-col justify-center items-center">
      <div className=" bg-gray-200 p-2 rounded-2xl shadow-lg mt-[6rem]">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="mx-3 text-gray-500"
        />
        <input
          type="text"
          className="bg-gray-200 border border-gray-200 w-[35rem] p-2 mr-2"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
          value={searchQuery}
        />
        <FontAwesomeIcon
          icon={faX}
          className="mx-2 text-gray-500"
          onClick={() => setSearchQuery("")}
        />
        <ul className="ml-11 ">
          {showResult &&
            searchResult.length > 0 &&
            searchResult.map((s) => <li className="pt-1">{s}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Body;
