
import React, { Component , useState} from '../../../node_modules/react';
import './jobPage.css';import {
    Link
  } from "react-router-dom";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userID: this.props.userID,
        job: this.props.location.state.job
        
    }
  }

submitData(event) {
    event.preventDefault();
    //this.updateVariables();

    var job = this.state.job
    job.jobStatus = 1;
    job.chosenUserID = this.state.userID;

    let url = new URL("http://localhost:3200/jobs?replace=true")

    url.searchParams.set("replaceID", job._id)
    url.searchParams.set("userID", job.userID)
    url.searchParams.set("jobStatus", job.jobStatus)
    url.searchParams.set("chosenUserID", job.chosenUserID)
    url.searchParams.set("title", job.title)
    url.searchParams.set("description", job.desc)
    url.searchParams.set("price", job.price)
    url.searchParams.set("location", job.location)

    fetch(url.href).then(() =>
    {
        fetch('http://localhost:3200/jobs?fetch=true&userID=' + this.props.userID)
        .then( resp => resp.json())
        .then((data)=> {
                this.setState({
                    job: data
                })
        })
    }
)
}

updateVariables(){
    var job = this.state.job
    job.jobStatus = 1;
    job.chosenUserID = this.state.userID;
}
  
  render() {
      //this.state.job = this.props.location.state.job
      const job = this.state.job

      if(job.jobStatus == 0) {
        return (
            <div className="jobContainer">
                <div className="descriptionContainer">
    
                    <img className="jobImage" src={"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2522&q=80"} />
                    <div>
                        <h3 className="jobTitle">
                            {job.title}
                        </h3>
                        <h6>
                            Location: {job.location}
                        </h6>
                        <p>
                            {job.description}
                        </p>
                    </div>
                </div>
    
                <Link onClick={e => {this.submitData(e)}}>
                   <div class="wrap">
                        <button className="applyButton" >
                          Apply for Job
                        </button>
                    </div>
                </Link>
                
                <div className="sellerDetails">
                    <p className="sellerName">{job.userID}</p>  <p><span className="sellerRating">4.5/5</span></p>
                </div>
    
                <Link to="/">
                   <div class="wrap">
                        <button className="backButton" >
                          Go Back
                        </button>
                    </div>
                </Link>
            </div>
        )
      }

      else {
        return (
            <div className="jobContainer">
                <div className="descriptionContainer">
    
                    <img className="jobImage" src={"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2522&q=80"} />
                    <div>
                        <h3 className="jobTitle">
                            {job.title}
                        </h3>
                        <h6>
                            Location: {job.location}
                        </h6>
                        <p>
                            {job.description}
                        </p>
                    </div>
                </div>
                
                <div className="sellerDetails">
                    <p className="sellerName">{job.userID}</p>  <p><span className="sellerRating">4.5/5</span></p>
                </div>
    
                <Link to="/">
                   <div class="wrap">
                        <button className="backButton" >
                          Go Back
                        </button>
                    </div>
                </Link>
            </div>
        )
      }

}
}

export default Job;