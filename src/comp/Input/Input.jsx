import React from "react";
import "./input.scss";

const Input = ({ cok, ...rest }) => {
  return (
    <>
      <textarea
        className="text"
        cols="30"
        rows="10"
        placeholder="Add a Commment..."
        {...rest}
      ></textarea>
    </>
  );
};

export default Input;
