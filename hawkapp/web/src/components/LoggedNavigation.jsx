import React from "react";
import { Link, withRouter } from "react-router-dom";

function logout(){
  localStorage.setItem('login', JSON.stringify({
    login: false,
    token: null,
  }))
  localStorage.setItem('userId', null)
}

function LoggedNavigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div>
            <Link class="navbar-brand" to="/SearchObjects"><img src={"./logo192.png"} alt="Jastrzębik logo" style={{height:40, marginTop: -7, marginRight: 10}} />Jastrzębik</Link>
          </div>
          <ul class="navbar-nav ml-auto">
            <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
              <Link class="nav-link" to="/SearchObjects">Search</Link>
            </li>
            <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
              <Link class="nav-link" to="/login">Reservations</Link>
            </li>
            <li class={`nav-item  ${props.location.pathname === "/register" ? "active" : ""}`}>
              <Link class="nav-link" to="/accountData">Account data</Link>
            </li>
            <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
              <Link class="nav-link" to="/">
              {/* <span onClick={this.logout()}>More</span> */}
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(LoggedNavigation);