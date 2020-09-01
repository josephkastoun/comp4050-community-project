import React from 'react'
import "./changeContact.css"
import Sidebar from "./sideBar.jsx"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Component } from 'react';

class changeAddress extends Component{
  render(){
    return (
      <div className="changeAddress-Page">
        <Sidebar/>
      
        <div className="changeAddress">
          <div className="card-header">
            Change Address
          </div>
          <div className="card-body">
          <form>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label>Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>NSW</option>
                            <option>VIC</option>
                            <option>QLD</option>
                            <option>NT</option>
                            <option>SA</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label >PostCode</label>
                    <input type="text" className="form-control" id="inputZip"/>
                    </div>
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

export default changeAddress