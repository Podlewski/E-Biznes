import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { LoggedNavigation } from "./index.js"
// import checkIfLoggedIn from "./LoginChekker";


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


class AccountData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      }
    };

    // this.checkIfLoggedIn(props);
    this.fillData();
  }

   checkIfLoggedIn(props){ 
    if(!localStorage.getItem('login'))
    {
      console.log(localStorage.getItem('login'))
      props.history.push('/');
    }
  }

  fillData() {

    fetch('http://localhost:8080/user/' + localStorage.getItem("userId"),
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            console.log("result", result);
            this.setState({
              firstName: result.firstName,
              lastName: result.lastName,
              email: result.email,
              phoneNumber: result.phoneNumber,
            })
            console.log("state", this.state.email);
          })
        }
        else {
          console.log('Wrong userId');
          this.setState({ error: true });
        }
      })
  }

  handleAlternate(event) {

    fetch('http://localhost:8080/user/' + localStorage.getItem("userId"),
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          console.log('User deleted:' + localStorage.getItem("userId"))
          localStorage.removeItem("userId")
          localStorage.removeItem('login')
            this.props.history.push('/login');
        }
        else {
          console.log('Cannot delete user');
          this.setState({ error: true });
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
      case "phoneNumber":
        formErrors.phoneNumber = phoneRegex.test(value) ? "" : "Invalid phone number";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleClick = e => {
    this.setState({ readOnly: false })
  };


  render() {
    const { formErrors } = this.state;
    var errorMsg;
    if (this.state.error)
      errorMsg = <span className="errorMessage">Please try again later</span>;
    return (
      <>
        <LoggedNavigation />
        <div className="wrapper-2">
          <div class="form-wrapper-2">
            <div class="row align-items-center my-5">
            {errorMsg}
              <form onSubmit={this.handleSubmit}>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" defaultValue={this.state.firstName} readOnly={this.state.readOnly} className={formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name" name="firstName" onChange={this.handleChange} />
                  {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)}
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" defaultValue={this.state.lastName} readOnly={this.state.readOnly} className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                  {formErrors.lastName.length > 0 && (<span className="errorMessage">{formErrors.lastName}</span>)}
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="text" defaultValue={this.state.email} readOnly={this.state.readOnly} className={formErrors.email.length > 0 ? "error" : null} placeholder="Email address" name="email" onChange={this.handleChange} />
                  {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                </div>
                <div className="leftField halfField">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" defaultValue={this.state.phoneNumber} readOnly={this.state.readOnly} className={formErrors.phoneNumber.length > 0 ? "error" : null} placeholder="Phone number" name="phoneNumber" onChange={this.handleChange} />
                  {formErrors.phoneNumber.length > 0 && (<span className="errorMessage">{formErrors.phoneNumber}</span>)}
                </div>
                <div className="my-auto">
                  <label clasName="mx-3" htmlFor="edit">Edit</label>
                  <input clasName="mx-3" type="checkbox" checked={!this.state.readOnly} onClick={this.handleClick} />
                </div>
                <div className="createAccount">
                  <button type="submit" disabled={this.state.readOnly}>Save changes</button>
                  <button onClick={this.handleAlternate.bind(this)}>Remove account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(AccountData);