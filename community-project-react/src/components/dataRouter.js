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
import MyJobPage from "./myJobPage/myJobPage"
import JobDataFill from "./dataFill/dataFillPage"

class dataRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          location: null,
          userID: '5f728f406d252648c48c305c',
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

                    <Route path="/add">
                        <JobDataFill userID={this.state.userID}/>
                    </Route>

                    <Route exact path = "/edit" render={(props) => <JobDataFill {...props} userID={this.state.userID}/> }/>

                    <Route path="/dashboard">
                        <Dashboard jobs={this.state.jobs} userID={this.state.userID}/>
                    </Route>

                    <Route exact path = "/job" render={(props) => <JobPage {...props} userID={this.state.userID}/> }/>

                    <Route exact path = "/myjob" render={(props) => <MyJobPage {...props} userID={this.state.userID}/> }/>

                    <Route path="/">
                        <HomePage jobs={this.state.jobs} userID={this.state.userID}/>
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}

export default dataRouter;