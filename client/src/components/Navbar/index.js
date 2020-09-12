import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Inventory Tracker
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/data"
              className={
                window.location.pathname === "/data" || window.location.pathname === "/data"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Data
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/orders"
              className={window.location.pathname === "/orders" ? "nav-link active" : "nav-link"}
            >
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/inventory"
              className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"}
            >
              Sign-in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
