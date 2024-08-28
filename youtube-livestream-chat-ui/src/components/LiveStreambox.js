import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ChatMessage from "./ChatMessage";
import generateRandomName from "../utils/getRandomName";
import generateRandomText from "../utils/getRandomMessage";

const MESSAGES = [
  { name: "max", message: "hi" },
  { name: "Ankur", message: "hello" },
];

const LIMIT = 25;

const LiveStreambox = () => {
  const [chats, setChats] = useState(MESSAGES);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let intervalId = setInterval(() => {
      let newChats = [
        ...chats,
        { name: generateRandomName(), message: generateRandomText(10) },
      ];
      if (newChats.length > 50) {
        newChats.splice(0, LIMIT);
      }
      setChats(newChats);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [chats]);

  return (
    <div className="h-[600px] w-[24rem]">
      {/* CHAT HEADER */}
      <div className="flex justify-between p-2 bg-gray-100 rounded-lg">
        <div>Top Chat</div>
        <div>
          <FontAwesomeIcon icon={faX} className="mr-2" />
        </div>
      </div>
      {/* LIVE STREAM */}
      <div className="p-3 bg-gray-100 h-[490px] my-2 rounded-lg overflow-y-scroll">
        {chats.map((m) => (
          <ChatMessage {...m} />
        ))}
      </div>
      {/* POST A CHAT */}
      <div className="bg-gray-100 rounded-lg p-2">
        <input
          type="text"
          className="p-2 bg-gray-100 w-[19rem] mr-2"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></input>
        <button
          className="bg-black text-white rounded-lg px-2 py-1"
          onClick={() =>
            setChats([...chats, { name: "Ankur", message: message + " 🚀" }])
          }
        >
          send
        </button>
      </div>
    </div>
  );
};

export default LiveStreambox;
