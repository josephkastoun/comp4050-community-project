import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

class currentJobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {id: 1, title:'Current job 1', desc: 'Description for current job 1', price: 10, loc: 'Macquarie Park'},
                {id: 2, title:'Current job 2', desc: 'Description for current job 2', price: 20, loc: 'Macquarie University'},
                {id: 3, title:'Current job 3', desc: 'Description for current job 3', price: 30, loc: 'Chatswood'},
            ]  
        };
    }

    render() {
        let jobList = this.state.jobs.map(job => {    
            return (
                <a href={job.id} className="job">
                    <div class="card border-dark mb-3">
                        <div class="card-body text-dark">
                            <h5 class="card-title">{job.title}</h5>
                            <p class="card-text">{job.desc}</p>
                        </div>
                        <div class="card-footer bg-transparent border-dark">
                            <p className="jobLocation">Location: {job.loc}</p>
                            <p className="jobPrice">Cost: {job.price}</p>
                        </div>
                    </div> 
                </a>
            );
        })
        return (
            <div className="container">
                <h3 className="text-left py-3">Your Current Jobs</h3>
                <div className="row">
                    {jobList}
                </div>
            </div>
        )
    }
}
                
export default currentJobs;

