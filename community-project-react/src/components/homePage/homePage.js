import React, { Component } from '../../../node_modules/react';
import './homePage.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    var locations = this.state.jobs

    var url = window.location.href.substring(29)
    if(url == "1") {
      locations = this.state.jobs.filter(function (jobs) {
        return jobs.loc === "Macquarie Park";
      });
    } else if(url == "2") {
      locations = this.state.jobs.filter(function (jobs) {
        return jobs.loc === "Epping";
      });
    } else if(url == "3") {
      locations = this.state.jobs.filter(function (jobs) {
        return jobs.loc === "Lane Cove";
      });
    } else if(url == "4") {
      locations = this.state.jobs.filter(function (jobs) {
        return jobs.loc === "Chatswood";
      });
    }


    let jobList = locations.map(job => {
      return (
        <a href={job.id} className="job">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.desc}</p>
          </div>
          <div className="card-footer bg-transparent border-dark">
            <p className="jobLocation">Location: {job.loc}</p>
            <p className="jobCost">Cost: {job.price}</p>
          </div>
        </div>
        </a>
      );
    })
    
    return (
      <div className="container">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Location
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/filter=1">Macquarie Park</a>
            <a className="dropdown-item" href="/filter=2">Epping</a>
            <a className="dropdown-item" href="/filter=3">Lane Cove</a>
            <a className="dropdown-item" href="/filter=4">Chatswood</a>
          </div>
        </div>

        <div className="row">
            {jobList}
        </div>

      </div>
    )
  }

}

export default App;
