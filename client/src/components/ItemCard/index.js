import React from "react";
import "./style.css";
// import API from "../utils/API";
import CardBtn from "../CardBtn"

function ItemCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.thumbnail} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.title}</strong>
          </li>
          <li>
            <p>Ingredients: {props.ingredients}</p>
          </li>
          <li>
            <CardBtn 
            onClick={props.handleBtnClick}
            data-value="order"
            id={props.id}
            >Order!
            </CardBtn>
            {/* I press this button, and Y goes up by one */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ItemCard;
