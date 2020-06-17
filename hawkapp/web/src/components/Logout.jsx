import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('login')
    localStorage.removeItem('userId')
    this.props.history.push('/');
  }
  
  render() {
    return (
        <h1></h1>
    );
  }
}

export default withRouter(Logout);