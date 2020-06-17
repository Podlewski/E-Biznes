import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Login.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });

  return valid;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      login: false,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  login() {
    fetch('http://localhost:8080/api/auth/signin',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            console.log("result", result);
            localStorage.setItem('login', JSON.stringify({
              login: true,
              token: result.token,
            }))
            localStorage.setItem('userId', result.id)
            localStorage.setItem('userType', result.role)
            localStorage.setItem('userBlocked', result.isBlocked? true: false)
            this.props.history.push('/searchObjects');
          })
        }
        else {
          console.log('Wrong password/username');
          this.setState({ error: true });
        }
      })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`SUCCESS: VALID DATA`)
      this.login();
    }
    else {
      console.error(`ERORR: INVALID DATA`)
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;
    var errorMsg;
    if (this.state.error)
      errorMsg = <span className="errorMessage">Wrong password or e-mail</span>;
    return (
        <div className="wrapper">
          <div class="form-wrapper">
            <h1>Sign in</h1>
            <div class="row align-items-center my-5">
              <form onSubmit={this.handleSubmit}>
                {errorMsg}
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Email address" name="email" onChange={this.handleChange} />
                  {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Password" name="password" onChange={this.handleChange} />
                  {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
                </div>
                <div className="createAccount">
                  <button type="submit">Sign in</button>
                  <div class="mt-1"><Link to="/register">Do not have an account?</Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(Login);