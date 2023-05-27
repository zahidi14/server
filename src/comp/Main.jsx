import { useEffect, useState } from "react";
import { jsonn } from "./get";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState();
  const url = "http://localhost:5500/api/data";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res);
      })
      .catch(console.log("error goblog"));
  }, []);

  console.log({ cek: data });
  return (
    <main role="main">
      <div className="cardCont" id="main">
        <div className="counter">
          <button className="plus" alt="plus">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <div className="score"></div>
          <button className="minus" alt="minus">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
        </div>
        <div className="commentBody">
          <div className="head">
            <div className="left">
              <div className="avatar">
                <img className="pic" src="" alt="" />
              </div>
              <div className="name">aa</div>
              <div className="time">aa</div>
            </div>
            <div className="righ">
              <button className="reply">
                <img src="/images/icon-reply.svg" alt="" srcSet="" /> Reply
              </button>
            </div>
          </div>
          <div className="commentText">
            <p>tes</p>
          </div>
        </div>
      </div>

      <div className="cardCont" id="main">
        <div className="counter">
          <button className="plus" alt="plus">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <div className="score"></div>
          <button className="minus" alt="minus">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
        </div>
        <div className="commentBody">
          <div className="head">
            <div className="left">
              <div className="avatar">
                <img className="pic" src="" alt="" />
              </div>
              <div className="name">aa</div>
              <div className="time">aa</div>
            </div>
            <div className="righ">
              <button className="reply">
                <img src="/images/icon-reply.svg" alt="" srcSet="" /> Reply
              </button>
            </div>
          </div>
          <div className="commentText">
            <p>tes</p>
          </div>
        </div>
      </div>

      <div className="cardCont" id="reply">
        <div className="counter">
          <button className="plus" alt="plus">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <div className="score"></div>
          <button className="minus" alt="minus">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
        </div>
        <div className="commentBody">
          <div className="head">
            <div className="left">
              <div className="avatar">
                <img className="pic" src="" alt="" />
              </div>
              <div className="name">aa</div>
              <div className="time">aa</div>
            </div>
            <div className="righ">
              <button className="reply">
                <img src="/images/icon-reply.svg" alt="" srcSet="" /> Reply
              </button>
            </div>
          </div>
          <div className="commentText">
            <p>tes</p>
          </div>
        </div>
      </div>

      <div className="cardCont" id="reply">
        <div className="counter">
          <button className="plus" alt="plus">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <div className="score"></div>
          <button className="minus" alt="minus">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
        </div>
        <div className="commentBody">
          <div className="head">
            <div className="left">
              <div className="avatar">
                <img className="pic" src="" alt="" />
              </div>
              <div className="name">aa</div>
              <div className="time">aa</div>
            </div>
            <div className="righ">
              <button className="reply">
                <img src="/images/icon-reply.svg" alt="" srcSet="" /> Reply
              </button>
            </div>
          </div>
          <div className="commentText">
            <p>tes</p>
          </div>
        </div>
      </div>

      <div className="commentForm">
        <div className="avatar"></div>
        <textarea
          className="comment-input"
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Add a Commment..."
        ></textarea>
        <button>SEND</button>
      </div>
    </main>
  );
};

export default Main;
