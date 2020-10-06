import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';

import ActiveListings from './activeListings';
import CurrentJobs from './currentJobs';
import History from './history';
import Info from './info';
import Datafill from '../dataFill/dataFillPage';


class dashboard extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        var uID = this.props.userID

        var myJobs = this.props.jobs
        //myJobs = this.props.jobs.filter(function (job) {
        //    return job.chosenUserID === uID;
        //});

        var activeJobs = this.props.jobs
        activeJobs = this.props.jobs.filter(function (job) {
            return job.userID === uID;
        });

        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-">
                            
                        </div>
                        <div class="col-lg">
                            <Info />
                            <Link to={"dataFill"} >Fill Data</Link>
                            <CurrentJobs jobs={this.props.jobs} userID={this.props.userID}/>
                            <ActiveListings jobs={this.props.jobs} userID={this.props.userID}/>
                            <History />
                        </div>
                        <div class="col-">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboard;
