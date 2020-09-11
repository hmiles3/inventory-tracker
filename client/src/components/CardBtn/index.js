import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button data-id={props.id} onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
