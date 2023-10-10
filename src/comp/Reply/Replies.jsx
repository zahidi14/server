import React from "react";
import "./reply.scss";
import { PlusIcon } from "../../asset/";

const Replies = ({ cok, setCont }) => {
  const handleIncrementScore = (commentId) => {
    setCont((prevCont) => {
      const updatedComments = prevCont.comments.map((comment) => {
        if (comment._id === commentId) {
          return {
            ...comment,
            score: comment.score + 1,
          };
        }
        return comment;
      });
      return {
        ...prevCont,
        comments: updatedComments,
      };
    });
  };

  const handleDecrementScore = (commentId) => {
    setCont((prevCont) => {
      const updatedComments = prevCont.comments.map((comment) => {
        if (comment._id === commentId) {
          return {
            ...comment,
            score: comment.score - 1,
          };
        }
        return comment;
      });
      return {
        ...prevCont,
        comments: updatedComments,
      };
    });
  };

  return (
    <div className="cardCont" id="reply" key={cok._id}>
      <div className="counter">
        <button className="plus" alt="plus" onClick={handleIncrementScore}>
          <PlusIcon />
        </button>
        <div className="score">{cok.score}</div>
        <button className="minus" alt="minus" onClick={handleDecrementScore}>
          {/* <Minus /> */}
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
            <button className="reply">{/* <Reply /> */}</button>
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
