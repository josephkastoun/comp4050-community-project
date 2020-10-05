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
import DataRouter from "./components/dataRouter"

function App() {
    
    return(
        <DataRouter />
    )
}

export default App;