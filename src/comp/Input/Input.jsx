import React from "react";
import "./input.scss";

const Input = ({ cok, ...rest }) => {
  return (
    <>
      <div className="inputContainer">
        <div className="image">
          <img src={cok.image.webp} />
        </div>
        <textarea
          className="text"
          cols="30"
          rows="10"
          placeholder="Add a Commment..."
          {...rest}
        ></textarea>
      </div>
    </>
  );
};

export default Input;
