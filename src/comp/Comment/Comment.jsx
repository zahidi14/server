import React from "react";
import "./comment.scss";
// import { Plus, Minus, Reply } from "../../asset";

const Comment = ({ co, setCount, inputRep }) => {
  const handleIncrementScore = (commentId) => {
    setCount((prevCont) => {
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
    <>
      <div className="cardCont" id="main">
        <div className="counter">
          <button
            className="plus"
            alt="plus"
            onClick={() => handleIncrementScore(co.id)}
          >
            {/* <Plus /> */}
          </button>
          <div className="score">{co.score}</div>
          <button
            className="minus"
            alt="minus"
            onClick={() => handleDecrementScore(co.id)}
          >
            {/* <Minus /> */}
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
            <div className="right">
              <button className="reply">{/* <Reply /> */}</button>
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
