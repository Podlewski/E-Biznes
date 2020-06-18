import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Style.css"

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div>
            <Link class="navbar-brand text-25" to="/"><img src={"/logo192.png"} alt="Jastrzębik logo" style={{height: 60, marginTop: -7, marginRight: 15}} />Jastrzębik</Link>
          </div>
          <ul class="navbar-nav ml-auto text-18">
            <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
              <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
              <Link class="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);