import React, { Component } from '../../../node_modules/react';
import './homePage.css';
import 'bootstrap/dist/css/bootstrap.css';

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
/*
    <div className="jobCard">
    <h4>{job.title}</h4>
    <div className="cardBody">
      <p className="jobDescription">{job.desc}</p>
      <a href={job.id} className="btn btn-primary">View Job</a>
    </div>
    <div className="cardFooter">
      <span className="jobLocation">Location: {job.loc}</span>
      <span className="jobCost">Cost: {job.price}</span>
    </div>
  </div>
  */

    let jobList = this.state.jobs.map(job => {
      return (
        <a href={job.id} className="job">
        <div class="jobCard">
          <div class="card-body text-secondary">
              <h5 class="card-title">{job.title}</h5>
              <p class="card-text">{job.desc}</p>
          </div>
          <div class="card-footer bg-transparent border-secondary">
            <p className="jobLocation">Location: {job.loc}</p>
            <p className="jobCost">Cost: {job.price}</p>
          </div>
        </div>
        </a>
      );
    })
    return (
      <div className="container">
          <h3 className="text-center py-3 text-uppercase">Local Jobs</h3>
          <div className="row">
              {jobList}
          </div>
      </div>
    )
  }
}

export default App;
