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

function App() {
    return(
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
                    <Route path="/">
                        <h1>HomePage</h1>
                        <Link to="/profile">profile</Link>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;