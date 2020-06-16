import React, { Component } from "react";
import { LoggedNavigation } from "./index.js"
import { Link, Redirect } from "react-router-dom";
import "./SportObject.css";
import "./Login.css";

class CreateSportObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectName: null,
      sportType: null,
      street: null,
      postalCode: null,
      city: null,
      formErrors: {
        objectName: "",
        sportType: "",
        street: "",
        postalCode: "",
        city: ""
      }
    };
  }

  render() {
    const { formErrors } = this.state;


    return (
      <>
        <LoggedNavigation />

        <div className="wrapper-2">
          <div class="object-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="email">
                <label htmlFor="objectName">Object Name</label>
                <input type="text" className={formErrors.objectName.length > 0 ? "error" : null} placeholder="Object Name" name="objectName" onChange={this.handleChange} />
                {formErrors.objectName.length > 0 && (<span className="errorMessage">{formErrors.objectName}</span>)}
              </div>
              <div className="fullField">
                <label htmlFor="sportType">Sport Type</label>
                <input type="text" className={formErrors.sportType.length > 0 ? "error" : null} placeholder="Sport type" name="sportType" onChange={this.handleChange} />
                {formErrors.sportType.length > 0 && (<span className="errorMessage">{formErrors.sportType}</span>)}
              </div>
              <div className="fullField">
                <label htmlFor="street">Street</label>
                <input type="text" className={formErrors.street.length > 0 ? "error" : null} placeholder="Street" name="street" onChange={this.handleChange} />
                {formErrors.street.length > 0 && (<span className="errorMessage">{formErrors.street}</span>)}
              </div>
              <div className="leftField">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" className={formErrors.postalCode.length > 0 ? "error" : null} placeholder="Postal Code" name="postalCode" onChange={this.handleChange} />
                {formErrors.postalCode.length > 0 && (<span className="errorMessage">{formErrors.postalCode}</span>)}
              </div>
              <div className="rightField">
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

export default CreateSportObject;