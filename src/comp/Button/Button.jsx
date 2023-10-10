import React from "react";
import "./button.scss";

const Button = ({ name, ...rest }) => {
  return (
    <button className="butt" {...rest}>
      {name}
    </button>
  );
};

export default Button;
