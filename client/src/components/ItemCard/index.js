import React from "react";
import "./style.css";
// import API from "../utils/API";

function ItemCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.thumbnail} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Item: </strong> {props.title}
          </li>
          <li>
            <strong>Ingredients:</strong> {props.ingredients}
          </li>
          <li>
            <button>Order!</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ItemCard;
