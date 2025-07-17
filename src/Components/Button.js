import React from "react";

const Button = ({text, ...rest}) => {
   return <button {...rest} className="btn">{text}</button>
};

export default Button


