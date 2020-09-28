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
          jobs: [
            { id: 1, title: 'Mow Lawn', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 30, loc: 'Macquarie Park'},
            { id: 2, title: 'Fix Door', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Epping'},
            { id: 3, title: 'Paint Wall', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Macquarie Park'},
            { id: 4, title: 'Lift to Train Station', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Macquarie Park'},
            { id: 5, title: 'Pack Boxes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 35, loc: 'Epping'},
            { id: 6, title: 'Walk Dogs', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 25, loc: 'Macquarie Park'},
            { id: 7, title: 'Clean Gutters', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 40, loc: 'Lane Cove'},
            { id: 9, title: 'Install/Setup New TV', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 15, loc: 'Macquarie Park'},
            { id: 10, title: 'Wash Car', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Lane Cove'},
            { id: 11, title: 'Vacuum Carpets', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10, loc: 'Epping'},
            { id: 12, title: 'Pickup Kids from School', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 20, loc: 'Chatswood'},
            { id: 13, title: 'Remove Tree Branch', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 25, loc: 'Epping'} 
          ]
        };
    }


    handleSelect(e) {
        console.log(e);
        this.setState({location : e})
    }

    /*
    componentDidMount() {
        console.log("This. ", this.props.location.state.job)
    }
    */

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
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}

export default dataRouter;