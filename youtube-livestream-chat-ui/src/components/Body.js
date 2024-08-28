import React from "react";
import LiveStreambox from "./LiveStreambox";


const Body = () => {
  return (
    <div className="p-5 flex gap-4">
      <div>
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?si=xCbWkxuXNDdffEPA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <LiveStreambox/>
      </div>
    </div>
  );
};

export default Body;
