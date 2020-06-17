import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { LoggedNavigation } from "./index.js";
import SingleReport from './SingleReport'
import "./Style.css"

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
    };

    this.fillData();
  }

  componentDidMount() {
    this.fillData('http://localhost:8080/report');
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
              reports: result
            })
            console.log("state", this.state.reports);
          })
        }
        else {
          console.log('Wrong reports');
        }
      })
  }

  createGridPanel() {
    let elements = []
    {
      this.state.reports.map(report => (
        elements.push(<SingleReport report={report} />)
      ))
    }
    return elements
  }

  render() {
    return (
      <>
        <LoggedNavigation />
        <div className="defaultWrapper">
          <div className="searchableObjects">
            <h4 className="text-center">Reports:</h4>
            {this.createGridPanel()}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Reports);
