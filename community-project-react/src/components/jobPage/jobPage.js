
import React, { Component , useState} from '../../../node_modules/react';
import './jobPage.css';import {
    Link
  } from "react-router-dom";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSelect(e) {
    console.log(e);
    this.setState({location : e})
  }

  
  componentDidMount() {
      console.log("This. ", this.props.location.state.job)
  }
  
  render() {
      const job = this.props.location.state.job
      const seller = job.seller
      return (
        <div className="jobContainer">
            <div className="descriptionContainer">

                <img className="jobImage" src={"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2522&q=80"} />
                <div>
                    <h3 className="jobTitle">
                        {job.title}
                    </h3>
                    <h6>
                        Location: {job.loc}
                    </h6>
                    <p>
                        {job.desc}
                    </p>
                </div>
            </div>

            <Link to="/">
               <div class="wrap">
                    <button className="applyButton" >
                      Apply for Job
                    </button>
                </div>
            </Link>
            
            <div className="sellerDetails">
                <p className="sellerName">John Doe</p>  <p><span className="sellerRating">4.5/5</span></p>
            </div>

            <Link to="/">
               <div class="wrap">
                    <button className="backButton" >
                      Go Back
                    </button>
                </div>
            </Link>
        </div>
    )}
}

export default Job;