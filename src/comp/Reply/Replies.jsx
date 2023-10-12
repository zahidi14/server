import { React, useState } from "react";
import "./reply.scss";
import Plus from "../../asset/images/icon-plus.svg?react";
import Minus from "../../asset/images/icon-minus.svg?react";
import Reply from "../../asset/images/icon-reply.svg?react";

const Replies = ({ cok }) => {
  const [count, setCount] = useState(cok.score);

  // const handleIncrementScore = (commentId) => {
  //   setCont((prevCont) => {
  //     const updatedComments = prevCont.comments.map((comment) => {
  //       if (comment._id === commentId) {
  //         return {
  //           ...comment,
  //           score: comment.score + 1,
  //         };
  //       }
  //       return comment;
  //     });
  //     return {
  //       ...prevCont,
  //       comments: updatedComments,
  //     };
  //   });
  // };

  // const handleDecrementScore = (commentId) => {
  //   setCont((prevCont) => {
  //     const updatedComments = prevCont.comments.map((comment) => {
  //       if (comment._id === commentId) {
  //         return {
  //           ...comment,
  //           score: comment.score - 1,
  //         };
  //       }
  //       return comment;
  //     });
  //     return {
  //       ...prevCont,
  //       comments: updatedComments,
  //     };
  //   });
  // };

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="cardCont" id="reply">
      <div className="counter">
        <button className="plus" alt="plus" onClick={plus}>
          <Plus />
        </button>
        <div className="score">{cok.score && count}</div>
        <button className="minus" alt="minus" onClick={minus}>
          <Minus />
        </button>
      </div>
      <div className="commentBody">
        <div className="head">
          <div className="left">
            <div className="avatar">
              <img className="pic" src={cok.user.image.webp} alt="" />
            </div>
            <div className="name">{cok.user.username}</div>
            <div className="time">{cok.createdAt}</div>
          </div>
          <div className="righ">
            <button className="reply">
              <Reply />
              Reply
            </button>
          </div>
        </div>
        <div className="commentText">
          <p>{cok.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Replies;
