import React, { Component , useState} from '../../../node_modules/react';
import {Link} from "react-router-dom";
import './homePage.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  handleSelect (e) {
    this.setState({location : e})
  }
  
  render() {
    var locations = this.props.jobs
    var locat = this.state.location

    if(locat != null) {
      locations = this.props.jobs.filter(function (job) {
        return job.location === locat;
      });
    }
 
    let jobList = locations.map(job => {
      return (
        <Link className="job" to={{pathname: "/job", state: {job: job}}}>
        <div className="homeCard border-dark mb-3">
          <div className="homeCardBody text-dark">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.description}</p>
          </div>
          <div className="card-footer bg-transparent border-dark">
            <p className="homeJobLocation">Location: {job.location}</p>
            <p className="homeJobCost">Cost: {job.price}</p>
          </div>
        </div>
        </Link>
      );
    })
    
    return (
      <div className= "homePage">
        <DropdownButton
          alignRight
          title="Location"
          id="dropdown-menu-align-right"
          variant="secondary"
          onSelect={val => this.handleSelect(val)}
        >
          <Dropdown.Item eventKey="">All</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Macquarie Park">Macquarie Park</Dropdown.Item>
          <Dropdown.Item eventKey="Epping">Epping</Dropdown.Item>
          <Dropdown.Item eventKey="Lane Cove">Lane Cove</Dropdown.Item>
          <Dropdown.Item eventKey="Chatswood">Chatswood</Dropdown.Item>
        </DropdownButton>
      <div className="homeContainer">
        <div className="row">
            {jobList}
        </div>
      </div>
      </div>

    )
  }

}

export default HomePage;