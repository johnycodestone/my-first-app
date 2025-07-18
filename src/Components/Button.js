import React from "react";
import "../styles/Button.css";

const Button = ({text, ...rest}) => {
   return <button {...rest} className="btn">{text}</button>
};

export default Button


