import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserProfile from "./userProfile/userProfile";
import ChangeContact from "./userProfile/changeContact";
import Header from "./headingBar";
import ChangeAddress from "./userProfile/changeAddress";
import HomePage from "./homePage/homePage"
import Dashboard from "./dashboard/dashboard"
import JobPage from "./jobPage/jobPage"

class dataRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          location: null,
          jobs: []
        };
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


    handleSelect(e) {
        console.log(e);
        this.setState({location : e})
    }

    /* */

    render() {
        return (
            <Router>
            <Header/>
            <div className="app"> 
                <Switch>
                    <Route path="/profile">
                        <UserProfile/>
                    </Route>
                    <Route path="/changecontact">
                        <ChangeContact/>
                    </Route>
                    <Route path="/changeaddress">
                        <ChangeAddress/>
                    </Route>

                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>

                    <Route exact path = "/job" render={(props) => <JobPage {...props} /> }/>

                    <Route path="/">
                        <HomePage jobs={this.state.jobs}/>
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}

export default dataRouter;