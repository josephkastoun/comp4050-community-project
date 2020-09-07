import React, { Component } from "react"
import Home from './homePage/homePage.js'
import JobPage from './jobPage/jobPage.js'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  export default class App extends Component {
      render() {
          return (
            <Router>
                  <div>
                      <Switch>
                          <Route exact path = "/">
                              <Home/>
                          </Route>
                          <Route exact path = "/job" render={(props) => <JobPage {...props} /> }/>
                      </Switch>
                  </div>
              </Router>
          )
      }
  }

