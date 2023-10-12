import { useEffect, useState } from "react";

import { Comment, Replies, Input, Button } from "../comp";
import axios from "axios";

const Main = () => {
  const [cont, setCont] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [ReplyTo, setReplyTo] = useState(null);
  const [showReplyInput, setReplyShow] = useState(false);

  useEffect(() => {
    getData();
    getUser();
  }, []);

  const replyButton = (co) => {
    setReplyTo(co);
    setReplyShow(true);
  };

  console.log("dasssta fetch", cont.data);
  const getData = async () => {
    await axios
      .get("https://comment-backend-eight.vercel.app/tes/comments")
      .then((res) => {
        setCont(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("tolol", err);
      });
  };

  const getUser = async () => {
    await axios
      .get("https://comment-backend-eight.vercel.app/user")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log({ errorcok: err });
      });
  };

  console.log("coook", user);

  const addComment = async () => {
    if (!comment) {
      alert("please enter comment");
      return;
    }
    const newComment = {
      content: comment,
      createdAt: new Date().toLocaleString(),
      score: 0, // You can set a default value or get it from user input
      user: {
        image: {
          png: "./images/avatars/image-juliosomo.png",
          webp: "./images/avatars/image-juliosomo.webp",
        },
        username: "juliosomo",
      },
      replies: [],
    };

    // const updatedComment = { ...cont };

    // updatedComment.push(newComment);

    console.log("upa", cont);
    await axios
      .post("https://comment-backend-eight.vercel.app/tes/comment", newComment)
      .then(() => {
        console.log("comment added successfully");

        setComment("");
      })
      .catch((err) => {
        console.error("Error adding comment: ", err);
      });

    console.log({ comment: updatedComment });
  };
  if (loading) {
    return <div>Loading data...</div>;
  }

  const comm = cont.data;
  console.log({ comm: user });
  return (
    <main role="main">
      {comm.map((co) => (
        <div key={co.id}>
          <div className="comment-container">
            <Comment co={co} setCont={setCont} />
            {co.replies.length !== 0 &&
              co.replies.map((cok) => (
                <Replies cok={cok} key={cok.id} setCont={setCont} />
              ))}
          </div>
        </div>
      ))}

      {user &&
        user.map((cok) => (
          <div className="inputContainer">
            <div className="image">
              <img src={cok.image.webp} />
            </div>
            <Input
              cok={cok}
              key={cok.id}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
            />
            <Button name="SEND" onClick={addComment} />
          </div>
        ))}

      {/* <pre>{JSON.stringify(cont, null, 2)}</pre> */}
    </main>
  );
};

export default Main;
