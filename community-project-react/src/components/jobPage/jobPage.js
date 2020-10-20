import React, { Component , useState} from '../../../node_modules/react';
import './jobPage.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
    Link
  } from "react-router-dom";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
      const job = this.props.location.state.job
      const seller = job.seller
      return (
            <div className="container">
                <div className="card">
                    <div class="row no-gutters">
                        <div className="col-md-4">
                            <img className="jobImage card-img-top"
                                src={"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2522&q=80"} />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="descriptionContainer">
                                    <div>
                                        <h3 className="card-title">
                                            {job.title}
                                        </h3>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            Location: {job.location}
                                        </h6>
                                        <p className="card-text">
                                            {job.description}
                                        </p>
                                        <div className="sellerDetails">
                                            <p className="sellerName text-muted">{job.userID}</p>
                                            <p><span className="sellerRating text-muted">4.5/5</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <Link to="/">
                        <button className="btn btn-primary btn-lg active">
                            Apply for Job
                        </button>
                    </Link>


                    <Link to="/">
                        <button className="btn btn-danger btn-lg active">
                            Go Back
                        </button>
                    </Link>
                </div>
                </div>

                
        </div>  
    )}
}

export default Job;