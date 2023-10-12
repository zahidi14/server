import React, { useState } from "react";
import "./comment.scss";
import Plus from "../../asset/images/icon-plus.svg?react";
import Minus from "../../asset/images/icon-minus.svg?react";
import Reply from "../../asset/images/icon-reply.svg?react";

const Comment = ({ co }) => {
  const [count, setCount] = useState(co.score);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="cardCont" id="main">
        <div className="counter">
          <button className="plus" alt="plus" onClick={plus}>
            <Plus />
          </button>
          <div className="score">{co.score && count}</div>
          <button className="minus" alt="minus" onClick={minus}>
            <Minus />
          </button>
        </div>
        <div className="commentBody">
          <div className="head">
            <div className="left">
              <div className="avatar">
                <img className="pic" src={co.user.image.webp} alt="" />
              </div>
              <div className="name">{co.user.username}</div>
              <div className="time">{co.createdAt}</div>
            </div>
            <div className="righ">
              <button className="reply">
                <Reply /> Reply
              </button>
            </div>
          </div>
          <div className="commentText">
            <p>{co.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
