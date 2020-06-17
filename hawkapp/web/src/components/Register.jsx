import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Login.css";
import Switch from "./Switch";

const dateRegex = RegExp(
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
);

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneRegex = RegExp(
  /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });

  return valid;
}


class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUser: true,
      firstName: null,
      lastName: null,
      email: null,
      birthDate: null,
      phoneNumber: null,
      password: null,
      signedUp: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        phoneNumber: "",
        password: ""
      }
    };
  }

  register() {

    const user = {
      role: this.state.isUser ? "USER": "ANIMATOR",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthDate: this.state.birthDate,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
    }

    fetch('http://localhost:8080/api/auth/signup/plain',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            console.log("result", result);
            this.props.history.push('/login');
          })
        }
        else {
          response.json().then((result) => {
            console.log("result", result);
            this.setState({ error: true, errorMsg: result.message });
          })
        }
      })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`${this.state.isUser}`)
      console.log(`SUCCESS: VALID DATA`)
    }
    else {
      console.error(`ERORR: INVALID DATA`)
    }
    this.register();
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName = value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
        break;
      case "birthDate":
        formErrors.birthDate = dateRegex.test(value) ? "" : "Invalid date - date should be in DD/MM/YYYY format";
        break;
      case "phoneNumber":
        formErrors.phoneNumber = phoneRegex.test(value) ? "" : "Invalid phone number";
        break;
      case "password":
        formErrors.password = value.length < 6 ? "Minimum 6 characters required" : "";
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  toggleSwitch = (value) => {
    this.setState({switchValue: value})
    this.setState({isUser: !this.state.isUser})
 }

  render() {
    const { formErrors } = this.state;
    var errorMsg;
    if (this.state.error){
      errorMsg = <span className="errorMessage">{this.state.errorMsg}</span>;
    }

    return (
      <div className="wrapper">
        <div class="form-wrapper">
          <h1>Registration</h1>
          <div class="row align-items-center my-5">
            <form onSubmit={this.handleSubmit}>
              {errorMsg}
              <div className="userTypeSwitch">
                <div class="row">
                  <div class="col-5 px-0" align="right">User</div>
                  <div class="col-2" align="center">
                    <Switch onChange={this.toggleSwitch} value = {this.state.switchValue} />
                  </div>
                  <div class="col-5 px-0" align="left">Animator</div>
                </div>
              </div>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className={formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name" name="firstName" onChange={this.handleChange} />
                {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                {formErrors.lastName.length > 0 && (<span className="errorMessage">{formErrors.lastName}</span>)}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Email address" name="email" onChange={this.handleChange} />
                {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
              </div>
              <div className="birthDate">
                <label htmlFor="birthDate">Birth Date</label>
                <input type="text" className={formErrors.birthDate.length > 0 ? "error" : null} placeholder="Birth Date" name="birthDate" onChange={this.handleChange} />
                {formErrors.birthDate.length > 0 && (<span className="errorMessage">{formErrors.birthDate}</span>)}
              </div>
              <div className="phoneNumber">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className={formErrors.phoneNumber.length > 0 ? "error" : null} placeholder="Phone number" name="phoneNumber" onChange={this.handleChange} />
                {formErrors.phoneNumber.length > 0 && (<span className="errorMessage">{formErrors.phoneNumber}</span>)}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Password" name="password" onChange={this.handleChange} />
                {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <div class="mt-1"><Link to="/login">Already have an account?</Link></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Registration);