import React, { useState, useEffect } from "react";

const MEME_API = "https://meme-api.com/gimme/20";

const useMemes = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const response = await fetch(MEME_API);
    const data = await response.json();
    setMemes([...memes, ...data?.memes]);
    setShowShimmer(false);
  };

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchMemes();
    }
  }

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {memes, showShimmer};
};

export default useMemes;
