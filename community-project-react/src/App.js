import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserProfile from "./components/userProfile/userProfile";
import ChangeContact from "./components/userProfile/changeContact";
import Header from "./components/headingBar";
import ChangeAddress from "./components/userProfile/changeAddress";
import HomePage from "./components/homePage/homePage"
import Dashboard from "./components/dashboard/dashboard"
import JobPage from "./components/jobPage/jobPage"
import MyJobPage from "./components/myJobPage/myJobPage"
import Login from "./components/login/login"
import Register from "./components/login/register"



function App() {
    
    return(
        <Router>
            <Header/>
            <div className="app"> 
                <Switch>

                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />


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
                    
                    <Route exact path = "/myjob" render={(props) => <MyJobPage {...props} /> }/>

                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;