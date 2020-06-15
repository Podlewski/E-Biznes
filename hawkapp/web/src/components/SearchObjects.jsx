import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { LoggedNavigation } from "./index.js";
import SingleSearchObject from './SingleSearchObject'

const categories = (facilityCategories, setCategory) => {
  
}

class SearchObjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      facilities: [],
    };

    this.fillData();
  }


  componentDidMount() {
    this.fillData('http://localhost:8080/facility');
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
              facilities: result
            })
            console.log("state", this.state.facilities);
          })
        }
        else {
          console.log('Wrong facilities');
        }
      })
  }

  createGridPanel() {
    let elements = []
    {
      this.state.facilities.filter(facility =>
        facility.name.includes(this.state.search)
      ).map(facility => (
        elements.push(<SingleSearchObject facility={facility} />)
      ))
    }
    return elements
  }

  search = (event) => {
    let keyword = event.target.value;
    this.setState({search: keyword});
  }

  render() {
    return (
      <>
        <LoggedNavigation />
        <input type="text" placeholder="Search" onChange={e => this.search(e)} />
        <div className="searchObjects">
          {this.createGridPanel()}
        </div>
      </>
    )
  }
}

export default withRouter(SearchObjects);
