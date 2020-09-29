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
      location: null,
      jobs: [
        { id: 1, title: 'Mow Lawn', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 30, loc: 'Macquarie Park'},
        { id: 2, title: 'Fix Door', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Epping'},
        { id: 3, title: 'Paint Wall', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Macquarie Park'},
        { id: 4, title: 'Lift to Train Station', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Macquarie Park'},
        { id: 5, title: 'Pack Boxes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 35, loc: 'Epping'},
        { id: 6, title: 'Walk Dogs', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 25, loc: 'Macquarie Park'},
        { id: 7, title: 'Clean Gutters', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 40, loc: 'Lane Cove'},
        { id: 9, title: 'Install/Setup New TV', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 15, loc: 'Macquarie Park'},
        { id: 10, title: 'Wash Car', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Lane Cove'},
        { id: 11, title: 'Vacuum Carpets', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Epping'},
        { id: 12, title: 'Pickup Kids from School', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Chatswood'},
        { id: 13, title: 'Remove Tree Branch', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 25, loc: 'Epping'}
      ]
    };
  }

  handleSelect (e) {
    console.log(e);
    this.setState({location : e})
  }
  
  render() {
    var locations = this.state.jobs
    var locat = this.state.location

    if(locat != null) {
      locations = this.state.jobs.filter(function (job) {
        return job.loc === locat;
      });
    }

    

    let jobList = locations.map(job => {
      return (
        <Link className="job" to={{pathname: "/job", state: {job: job}}}>
        <div className="homeCard border-dark mb-3">
          <div className="homeCardBody text-dark">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.desc}</p>
          </div>
          <div className="card-footer bg-transparent border-dark">
            <p className="homeJobLocation">Location: {job.loc}</p>
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