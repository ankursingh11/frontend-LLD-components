import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-3 my-2">
      <FontAwesomeIcon
        icon={faUser}
        className="p-2 border border-black rounded-full bg-indigo-100"
      />
      <p className="mt-1">
        <span className="font-bold">{name}</span>
        <span> : {message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
