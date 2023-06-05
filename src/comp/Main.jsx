import { useEffect, useState } from "react";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Reply } from "../images/icon-reply.svg";
import { fetc } from "./get";
import Replies from "./Replies";

const Main = () => {
  const [cont, setCont] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetc()
      .then((res) => {
        setCont(res[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Goblog", error);
      });
  }, []);

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

  if (loading) {
    return <div>Loading data...</div>;
  }

  console.log({ cek: cont.currentUser.username });

  return (
    <main role="main">
      {cont.comments.map((co) => (
        <div className="comment-container" key={co._id}>
          <div className="cardCont" id="main">
            <div className="counter">
              <button
                className="plus"
                alt="plus"
                onClick={() => handleIncrementScore(co._id)}
              >
                <Plus />
              </button>
              <div className="score">{co.score}</div>
              <button
                className="minus"
                alt="minus"
                onClick={() => handleDecrementScore(co._id)}
              >
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
                <div className="right">
                  <button className="reply">
                    <Reply />
                  </button>
                </div>
              </div>
              <div className="commentText">
                <p>{co.content}</p>
              </div>
            </div>
          </div>
          {co.replies.length !== 0 &&
            co.replies.map((cok) => (
              <Replies
                cok={cok}
                key={cok._id}
                handleIncrementScore={handleIncrementScore}
                handleDecrementScore={handleDecrementScore}
              />
            ))}
        </div>
      ))}
      ;
      <div className="inputContainer">
        <div className="image">
          <img src={cont.currentUser.image.webp} />
        </div>
        <textarea
          className="text"
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Add a Commment..."
        ></textarea>
        <button className="butt">SEND</button>
      </div>
    </main>
  );
};

export default Main;
