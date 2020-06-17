import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { LoggedNavigation } from "./index.js";
import SingleSearchObject from './SingleSearchObject'

class MyObjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      displayCategory: "all",
      categories: [],
      facilities: [],
    };

    this.fillData();
  }

  createCategories() {
    return this.state.categories.map(category => (
      <button className="btn-category" key={category} onClick={() => this.setCategory(category)}>
        {category}
      </button>
    ))
  }

  componentDidMount() {
    this.fillData('http://localhost:8080/facility/filter?search=animatorId==' + localStorage.getItem("userId"));
  }

  setCategory(category) {
    this.setState({displayCategory: category});
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

            this.setState({
              categories: ["all", ...new Set(result.map(x => x.city))]
            })
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
        facility.city === this.state.displayCategory || this.state.displayCategory === "all"
      ).filter(facility =>
        facility.name.toUpperCase().includes(this.state.search.toUpperCase())
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
        <div className="defaultWrapper">
          <div className="row text-center">
            <input type="text" className="wideSearch mr-3" placeholder="Search" onChange={e => this.search(e)} />
            <Link to="/newObject">
              <button class="butt butt-h">Add Facility</button>
            </Link>
          </div>
          <div className="searchableObjects">
            {this.createGridPanel()}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(MyObjects);
