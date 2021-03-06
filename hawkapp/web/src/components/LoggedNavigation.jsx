import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Style.css";

function userNavigation(props) {
  return (
    <ul class="navbar-nav ml-auto text-18">
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/SearchObjects">Search</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/reservations">Reservations</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/accountData">Account data</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/regulations">Regulations</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
        <Link class="nav-link" to="/logout">Log Out</Link>
      </li>
    </ul>
  )
}


function adminNavigation(props) {
  return (
    <ul class="navbar-nav ml-auto text-18">
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/SearchObjects">Search</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/Reports">Reports</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/accountData">Account data</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/regulations">Regulations</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
        <Link class="nav-link" to="/logout">Log Out</Link>
      </li>
    </ul>
  )
}

function animatorNavigation(props) {
  return(
    <ul class="navbar-nav ml-auto text-18">
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/SearchObjects">Search</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/myObjects">My Facilities</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/accountData">Account data</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
        <Link class="nav-link" to="/regulations">Regulations</Link>
      </li>
      <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
        <Link class="nav-link" to="/logout">Log Out</Link>
      </li>
    </ul>
  )
}

function LoggedNavigation(props) {
  var content;
  if (localStorage.getItem("userType") === "ANIMATOR")
    content = animatorNavigation(props);
  else if (localStorage.getItem("userType") === "USER")
    content = userNavigation(props);
  else
    content = adminNavigation(props);
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div>
            <Link class="navbar-brand text-25" to="/SearchObjects"><img src={"/logo192.png"} alt="Jastrzębik logo" style={{ height: 60, marginTop: -7, marginRight: 15 }}/>Jastrzębik</Link>
          </div>
          {content}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(LoggedNavigation);