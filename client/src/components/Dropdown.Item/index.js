import React from "react";

function DropdownItem(props) {
    return (
      <button onClick={props.onClick} className={`dropdown-btn ${props["data-value"]}`} {...props} />
    );
  }
  
  export default DropdownItem;