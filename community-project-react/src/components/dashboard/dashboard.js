import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';

import ActiveListings from './activeListings';
import CurrentJobs from './currentJobs';
import History from './history';
import Info from './info';
<<<<<<< Updated upstream
=======
import Datafill from '../dataFill/dataFillPage';
import { isAuthenticated } from "../../auth/index";
>>>>>>> Stashed changes


class dashboard extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {

        const {
            user: { _id, name, email, address, balance, role }
        } = isAuthenticated();

        var uID = _id;

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
<<<<<<< Updated upstream
                            <Info />
                            <Link to="/datafill">Fill Data</Link>
                            <CurrentJobs jobs={myJobs}/>
                            <ActiveListings jobs={activeJobs}/>
                            <History />
=======
                            <Info uID = {_id}/>
                            <CurrentJobs jobs={myJobs} userID={_id}/>
                            <ActiveListings jobs={activeJobs} userID={_id}/>
                            <History jobs={pastJobs} userID={_id}/>
>>>>>>> Stashed changes
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
