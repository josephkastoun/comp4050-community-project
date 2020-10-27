import React, { Component } from 'react';
import * as JsSearch from 'js-search';

class search extends Component {

    //https://github.com/bvaughn/js-search
    //https://www.gatsbyjs.com/docs/adding-search-with-js-search/

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        fetch('http://localhost:3200/jobs?fetch=true')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    jobs: data
                })
            })
    }

    searchData = e => {
        const queryResult = e.target.value;
        let data = []

        this.state.jobs.forEach(e => {
            if(e.description.toLowerCase().search(queryResult.toLowerCase()) != -1 
            || e.title.toLowerCase().search(queryResult.toLowerCase()) != -1
            || e.location.toLowerCase().search(queryResult.toLowerCase()) != -1){
                data.push(e);
            }
        });

        this.setState({ searchQuery: e.target.value, searchResults: data })
      }
      
      handleSubmit = e => {
        e.preventDefault()
      }
 

    render() {
        // const { allJobs, searchResults, searchQuery } = this.state
        // const queryResults = searchQuery === "" ? allJobs : searchResults
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ margin: "0 auto" }}>
                        <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                            Enter your search here
                        </label>
                        <input
                            id="Search"
                            // value={searchQuery}
                            onChange={this.searchData}
                            placeholder="Enter your search here"
                            style={{ margin: "0 auto", width: "400px" }}
                        />
                    </div>
                </form>
                {/*

                #card
                let jobList = this.props.jobs.map(job => {    
                    return (
                        <Link className="job" to={{pathname: "/myjob", state: {job: job}}}>
                            <div class="card border-dark mb-3 dash-card">
                                <div class="card-body text-dark dash-card-body">
                                    <h5 class="card-title">{job.title}</h5>
                                    <p class="card-text">{job.description}</p>
                                </div>
                                <div class="card-footer bg-transparent border-dark">
                                    <p className="jobLocation">Location: {job.location}</p>
                                    <p className="jobPrice">Cost: {job.price}</p>
                                </div>
                            </div> 
                        </Link>
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

                #from example
                <div>
                    Number of items:
                    {queryResults.length}
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Job ID?
                                </th>
                                <th>
                                    Job Title
                                </th>
                                <th>
                                    Job Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {queryResults.map(item => {
                                return (
                                    <tr key={`row_${item.jobs}`}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.location}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                */}
            </div>
        );
    }
}

export default search;