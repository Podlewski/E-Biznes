import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">Jastrzębik</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class={`nav-item  ${props.location.pathname === "/home" ? "active" : ""}`}>
                <Link class="nav-link" to="/home">Home</Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
                <Link class="nav-link" to="/login">Logowanie</Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
                <Link class="nav-link" to="/register">Rejestracja</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);