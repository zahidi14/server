import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Reply } from "../images/icon-reply.svg";

const Replies = ({
  cok,

  handleDecrementScore,
  handleIncrementScore,
}) => {
  const handleIncrement = () => {
    handleIncrementScore(cok._id);
  };

  const handleDecrement = () => {
    handleDecrementScore(cok._id);
  };
  return (
    <div className="cardCont" id="reply" key={cok._id}>
      <div className="counter">
        <button className="plus" alt="plus" onClick={handleIncrement}>
          <Plus />
        </button>
        <div className="score">{cok.score}</div>
        <button className="minus" alt="minus" onClick={handleDecrement}>
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
