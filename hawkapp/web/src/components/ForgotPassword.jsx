import React, { Component } from "react";
import { Link } from "react-router-dom";
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


class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      formErrors: {
        email: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`SUCCESS: VALID DATA`)
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

    return (
      <div className="wrapper">
        <div class="form-wrapper">
          <h1>Forgot password?</h1>
          <div class="row align-items-center my-5">
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Email address" name="email" noValidate onChange={this.handleChange}/>
                  {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                </div>
                <div className="createAccount">
                  <button type="submit">Send email</button>
                  <div class="mt-1"><Link to="/register">Do not have an account?</Link></div>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;