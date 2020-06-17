import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { LoggedNavigation } from "./index.js";
import "./Style.css"
import SingleReservation from './SingleReservation.jsx';

class Reservations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      reservations: [],
    };

    this.fillData();
  }

  componentDidMount() {
    this.fillData('http://localhost:8080/reservation/user/' + localStorage.getItem("userId"));
  }

  fillData(url) {
    fetch(url,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            this.setState({
              reservations: result
            })
            this.setState({ hasReservations: (this.state.reservations && this.state.reservations.length) != 0 });
          })
        }
        else {
          this.setState({ hasReservations: false });
        }
      })
  }

  createGridPanel() {
    let elements = []
    {
      this.state.reservations.map(reservation =>
        elements.push(<SingleReservation reservation={reservation} />)
      )
    }
    return elements
  }

  render() {
    var title;

    if (!this.state.hasReservations) {
      title = (
        <div>
          <h1>You have no reservations.</h1>
          <div className="text-center mt-3">
            <Link to={{ pathname: `searchObjects` }}>
              Make some!
            </Link>
          </div>
        </div>
      );
    } else {
      title = (
        <div>
          <h1>Reservations</h1>
        </div>
      );
    }
    return (
      <>
        <LoggedNavigation />
        <div className="defaultWrapper">
          {title}
          <div className="searchableObjects">
            {this.createGridPanel()}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Reservations);
