import React from 'react'
import "./changeAddress.css"
import Sidebar from "./sideBar.jsx"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Component } from 'react';

class changeContact extends Component{
  render(){
    return (
      <div className="changeContacts-Page">
        <Sidebar/>
      
        <div className="changeContact">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label >New Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <Link to="/profile">
                <button type="submit" className="btn btn-primary">
                      Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default changeContact