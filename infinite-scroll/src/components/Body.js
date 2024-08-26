import React, { useEffect } from "react";
import useMemes from "../utils.js/useMemes";
import Memecard from "./Memecard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const {memes, showShimmer} = useMemes();

  if (showShimmer) {
    return (<div className = "flex flex-wrap gap-10 justify-center mt-10">
        <ShimmerUI/>
    </div>);
  }

  return (
    <div className = "flex flex-wrap gap-10 mt-10 justify-center">
        {memes.map((meme) => <Memecard key = {meme?.author} {...meme}/>)}
    </div>
  );
};

export default Body;
