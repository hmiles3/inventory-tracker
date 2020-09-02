import React from "react";
import "./style.css";
import DropdownItem from "../Dropdown.Item"

function Dropdown(props) {
    
  return (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Items
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.options.map(currorder =>(
              <DropdownItem 
              className="dropdown-item" 
              onClick={props.handleBtnClick}
              value={currorder.id}
              key={currorder.id}
            >{currorder.name}</DropdownItem>
            ))}
        </div>
    </div>
  );
}

export default Dropdown;
