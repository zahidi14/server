import React, { useState } from "react";
import "./comment.scss";
import Plus from "../../asset/images/icon-plus.svg?react";
import Minus from "../../asset/images/icon-minus.svg?react";
import Reply from "../../asset/images/icon-reply.svg?react";
import Delete from "../../asset/images/icon-delete.svg?react";
import Edit from "../../asset/images/icon-edit.svg?react";
import { Input, Button } from "../index";
import axios from "axios";
const Comment = ({ co }) => {
  const [count, setCount] = useState(co.score);
  const [repInput, setRep] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [replyto, setReplyTo] = useState("");
  const [confirm, setConfirm] = useState(false);

  const confirmdialog = async () => {
    setConfirm(true);
  };

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  const addReply = async () => {
    if (!inputVal) {
      alert("please enter comment");
      return;
    }
    const newComment = {
      content: inputVal,
      createdAt: new Date().toLocaleString(),
      score: 0, // You can set a default value or get it from user input
      user: {
        image: {
          png: "./images/avatars/image-juliosomo.png",
          webp: "./images/avatars/image-juliosomo.webp",
        },
        username: "juliusomo",
      },
    };

    // const updatedComment = { ...cont };

    // updatedComment.push(newComment);

    await axios
      .post(
        `https://comment-backend-eight.vercel.app/tes/comment/${co._id}/replies`,
        newComment
      )
      .then(() => {
        console.log("comment added successfully");

        setInputVal("");
      })
      .catch((err) => {
        console.error("Error adding comment: ", err);
      });

    console.log({ comment: newComment });
  };

  const remove = async () => {
    console.log("id", co._id);
    await axios
      .delete(`https://comment-backend-eight.vercel.app/tes/comment/${co._id}`)
      .then(() => {
        console.log("success deleted");
        setConfirm(false);
      })
      .catch((err) => console.log("error removing replies", err));
  };
  const handleReply = () => {
    setRep(true);
    if (replyto === "") {
      setReplyTo("@" + co.user.username);
    } else {
      setReplyTo("");
    }
  };
  const del = co.user.username;
  console.log({ input: inputVal });
  return (
    <>
      <div className="cardCont" id="main">
        <div className="counter" id="desktop">
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
              {del === "juliusomo" ? (
                <>
                  <button className="reply" onClick={confirmdialog}>
                    <Delete />
                    Delete
                  </button>
                  <button className="reply" onClick={handleReply}>
                    <Edit />
                    Edit
                  </button>
                </>
              ) : (
                <button className="reply" onClick={handleReply}>
                  <Reply />
                  Reply
                </button>
              )}
            </div>
          </div>
          <div className="commentText">
            <p>{co.content}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="counter" id="mobile">
            <button className="plus" alt="plus" onClick={plus}>
              <Plus />
            </button>
            <div className="score">{co.score && count}</div>
            <button className="minus" alt="minus" onClick={minus}>
              <Minus />
            </button>
          </div>
          <div className="repl">
            <button className="reply">
              <Reply /> Reply
            </button>
          </div>
        </div>
        {confirm && (
          <div className="confirm">
            <div className="confirm-body">
              <h1>Delete Comment</h1>
              <div className="body">
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
              </div>
              <div className="buttonCont">
                <Button
                  name="NO, CANCEL"
                  onClick={() => setConfirm(false)}
                  className="cancel"
                />{" "}
                <Button name="YES, DELETE" onClick={remove} className="true" />
              </div>
            </div>
          </div>
        )}
      </div>

      {repInput && (
        <div className="inputContainer" id="desktop">
          <div className="image">
            <img src={co.user.image.webp} />
          </div>
          <Input
            type="text"
            value={replyto}
            onChange={(e) => {
              const input = e.target.value;
              setReplyTo(input);
              setInputVal(input);
            }}
          />
          <Button name="SEND" onClick={addReply} />
        </div>
      )}
    </>
  );
};

export default Comment;
