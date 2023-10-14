import { React, useState } from "react";
// import "./reply.scss";
import Plus from "../../asset/images/icon-plus.svg?react";
import Minus from "../../asset/images/icon-minus.svg?react";
import Reply from "../../asset/images/icon-reply.svg?react";
import Delete from "../../asset/images/icon-delete.svg?react";
import Edit from "../../asset/images/icon-edit.svg?react";
import axios from "axios";
import { Button, Input } from "../";

const Replies = ({ cok }) => {
  const [count, setCount] = useState(cok.score);
  const [repl, setRep] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [replyInput, setReplyInput] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const replButton = () => {
    setReplyInput(true);
    if (repl === "") {
      setRep("@" + cok.user.username); // Set repl to the username if it's currently empty
    } else {
      setRep(""); // Reset repl to an empty string if it already has a value
    }
  };

  const confirmdialog = async () => {
    setConfirm(true);
  };

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  const del = cok.user.username;
  console.log("cok", del);
  return (
    <>
      <div className="cardCont" id="reply">
        <div className="counter" id="desktop">
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
              {del === "juliusomo" ? (
                <>
                  <button className="reply" onClick={confirmdialog}>
                    <Delete />
                    Delete
                  </button>
                  <button className="reply" onClick={replButton}>
                    <Edit />
                    Edit
                  </button>
                </>
              ) : (
                <button className="reply" onClick={replButton}>
                  <Reply />
                  Reply
                </button>
              )}
            </div>
          </div>
          <div className="commentText">
            <p>{cok.content}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="counter" id="mobile">
            <button className="plus" alt="plus" onClick={plus}>
              <Plus />
            </button>
            <div className="score">{cok.score && count}</div>
            <button className="minus" alt="minus" onClick={minus}>
              <Minus />
            </button>
          </div>
          <div className="repl">
            {del === "juliusomo" ? (
              <>
                <button className="reply">
                  <Delete />
                  Delete
                </button>
                <button className="reply" onClick={replButton}>
                  <Edit />
                  Edit
                </button>
              </>
            ) : (
              <button className="reply" onClick={replButton}>
                <Reply />
                Reply
              </button>
            )}
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

      {replyInput && (
        <div className="inputContainer replyInput" id="desktop">
          <div className="image">
            <img src={cok.user.image.webp} />
          </div>
          <Input
            type="text"
            value={repl}
            onChange={(e) => {
              const input = e.target.value;
              setRep(input);
              setInputVal(input);
            }}
          />
          <Button name="SEND" />
        </div>
      )}
    </>
  );
};

export default Replies;
