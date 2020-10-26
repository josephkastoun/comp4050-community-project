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


    rebuildIndex() {
        const allJobs = this.props.jobs;

        const dataToSearch  = new JsSearch.Search('jobs');

        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("jobs")
        
        dataToSearch.addIndex('title');
        dataToSearch.addIndex('description');
        dataToSearch.addIndex('location');
        dataToSearch.addIndex('jobs');

        dataToSearch.addDocument(allJobs)
        this.setState({ search: dataToSearch, isLoading: false })
    }


    searchData = e => {
        const { search } = this.state
        const queryResult = search.search(e.target.value)
        this.setState({ searchQuery: e.target.value, searchResults: queryResult })
      }
      handleSubmit = e => {
        e.preventDefault()
      }
 

    render() {
        const { allJobs, searchResults, searchQuery } = this.state
        const queryResults = searchQuery === "" ? allJobs : searchResults
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <div style={{ margin: "0 auto" }}>
                        <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                            Enter your search here
                        </label>
                        <input
                            id="Search"
                            value={searchQuery}
                            onChange={this.searchData}
                            placeholder="Enter your search here"
                            style={{ margin: "0 auto", width: "400px" }}
                        />
                    </div>
                </form> 
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
            </div>
        );
    }
}

export default search;