import React, { Component } from "react";
import { LoggedNavigation } from "./index.js"
import {withRouter} from "react-router-dom";
import "./SportObject.css";
import "./Login.css";

const sports = [
  'Voleyball',
  'Golf',
  'Football']

class CreateSportObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      sportId: 0,
      address: null,
      postCode: null,
      city: null,
      price: null,
      phone: null,
      animatorId: localStorage.getItem("userId"),
      formErrors: {
        name: "",
        sportType: "",
        address: "",
        postCode: "",
        city: "",
        price:"",
        phone:""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.createObject();
  };


  createObject() {
    fetch('http://localhost:8080/facility',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            this.props.history.push('/myObjects');
          })
        }
        else {
          response.json().then((result) => {
            console.log("result", result);
            this.setState({ error: true, errorMsg: "Fill data"});
          })
        }
      })
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = this.state.formErrors;

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  setSport = e => {
    e.preventDefault();
    this.setState({sportId: e.target.value});
    console.log(this.state)
  }

  render() {
    const { formErrors } = this.state;

    var errorMsg;
    if (this.state.error)
      errorMsg = <span className="errorMessage">{this.state.errorMsg}</span>;
    return (
      <>
        <LoggedNavigation />
        <div className="wrapper-2">
          <div class="object-wrapper">
            <form onSubmit={this.handleSubmit}>
            {errorMsg}
              <div className="field bigField leftField">
                <label htmlFor="name">Object Name</label>
                <input type="text" className={formErrors.name.length > 0 ? "error" : null} placeholder="Object Name" name="name" onChange={this.handleChange} />
                {formErrors.name.length > 0 && (<span className="errorMessage">{formErrors.name}</span>)}
              </div>
              <div className="smallField rightField my-auto">
                <select id="myList" onChange={this.setSport}>
                  <option value="0">Volleyball</option>
                  <option value="1">Basketball</option>
                  <option value="2">Baseball</option>
                  <option value="3">Golf</option>
                  <option value="4">Dance</option>
                </select>
              </div>
              <div className="halfField leftField">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className={formErrors.phone.length > 0 ? "error" : null} placeholder="Phone" name="phone" onChange={this.handleChange} />
                {formErrors.phone.length > 0 && (<span className="errorMessage">{formErrors.phone}</span>)}
              </div>
              <div className="halfField rightField">
                <label htmlFor="price">Price</label>
                <input type="text" pattern="[0-9]*" className={formErrors.price.length > 0 ? "error" : null} placeholder="Price" name="price" onChange={this.handleChange} />
                {formErrors.price.length > 0 && (<span className="errorMessage">{formErrors.price}</span>)}
              </div>
              <div className="fullField">
                <label htmlFor="address">Address</label>
                <input type="text" className={formErrors.address.length > 0 ? "error" : null} placeholder="Street with number" name="address" onChange={this.handleChange} />
                {formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
              </div>
              <div className="halfField leftField">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" className={formErrors.postCode.length > 0 ? "error" : null} placeholder="Postal Code" name="postCode" onChange={this.handleChange} />
                {formErrors.postCode.length > 0 && (<span className="errorMessage">{formErrors.postCode}</span>)}
              </div>
              <div className="halfField rightField">
                <label htmlFor="city">City</label>
                <input type="text" className={formErrors.city.length > 0 ? "error" : null} placeholder="City" name="city" onChange={this.handleChange} />
                {formErrors.city.length > 0 && (<span className="errorMessage">{formErrors.city}</span>)}
              </div>
              <div className="createAccount">
                <button type="submit">Create Object</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CreateSportObject);