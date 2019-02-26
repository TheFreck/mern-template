import React from "react";

const Button = props => {
  return (
    <button 
      onClick={props.click}
      name={props.id}
    >{props.id}</button>
  );

}

export default Button;
