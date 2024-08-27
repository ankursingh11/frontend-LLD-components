import React, { useState } from "react";
import { COMMENTS } from "../config/comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUpLong,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";

const Comment = ({ data }) => {
  return (
    <div className="flex">
      <FontAwesomeIcon
        icon={faUser}
        className="border border-black rounded-full p-2 bg-blue-200"
      />
      <div className="ml-3">{data}</div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-4">
      <Comment data={comment.comment} />
      <p className = "flex gap-4 cursor-pointer mx-10 my-2">
        {comment.replies.length > 0 && <FontAwesomeIcon icon={faUpLong} onClick = {() => setShow(false)}/>}
        {comment.replies.length > 0 && <FontAwesomeIcon icon={faDownLong} onClick = {() => setShow(true)}/>}
      </p>
      
      {show && (
        <div className="ml-4 border-l border-gray-400 pl-2">
          {comment.replies.length > 0 &&
            comment.replies.map((c) => <CommentList comment={c} />)}
        </div>
      )}
    </div>
  );
};

const NestedComments = () => {
  return (
    <div className="m-10 w-9/12">
      <div>
        <h1 className="text-3xl font-bold mb-3">
          Exchanging USD with INR cash leverage
        </h1>
        <p className="mb-3">
          My best friends father is law wants to pay the tuition fees of his son
          in the US and he has plenty of black money in India which he wants to
          utilise for the US tution fees. I live in India but have USD funds in
          the US which he wants me to use it to pay the tuition fees in exchange
          for his black money. We have done this transaction in the past but
          I've recently learnt that the black market rate for this exchange is
          typically 4-5 ruppees than the real time forex rates. After learning
          this i proposed to my best friend if he would be ok to atleast close
          the deal for 85, he upfront denied and was not even ok for 0.01 above
          the actual live rate. He knows how bad my financial status is yet he
          wouldn't support by giving a tiny extra margin. All the more the INR
          cash is something that i can't even put to use and will forced to make
          large expenses. I feel very used and unhappy after i learnt how he
          benefited so much from my deal last time and didn't even have the
          heart to pay a tiny extra margin.
        </p>
        <hr />
        <h3 className="my-3 text-2xl font-semibold">Comments</h3>
        {COMMENTS.map((c) => (
          <CommentList comment={c} />
        ))}
      </div>
    </div>
  );
};

export default NestedComments;
