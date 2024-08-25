import React, { useState, useEffect } from "react";

const MEME_API = "https://meme-api.com/gimme/30";

const useMemes = () => {
  const [memes, setMemes] = useState([]);

  const fetchMemes = async () => {
    const response = await fetch(MEME_API);
    const data = await response.json();
    setMemes(data?.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return memes;
};

export default useMemes;
