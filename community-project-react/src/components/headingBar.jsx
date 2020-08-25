import React, { Component } from 'react';
import './headingBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class headingBar extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            coins : 100,
            username : "Joseph"

        };
    }

    componentDidUpdate(prevProps, prevState) {
        
    }   
    

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div className="logoDiv">
                    <a className="logoDiv navbar-brand" href="#">
                    <svg width="30" height="30" viewBox="0 0 16 16" className="mainLogo d-inline-block align-top" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                    Commune
                    </a>
                 </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Dashboard</a>
                        </li>
                    </ul>
                </div>

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-light my-2 my-sm-0 border border-dark" type="submit">Search</button>
                </form>

                <div className="coinContainer border rounded">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="userCoinsIcon" fill="#17a2b8" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
                    </svg>
                    <span className="coinsText navbar-text">
                        {this.state.coins} Coins
                    </span>
                </div>
                <div className="profileDiv">
                <span className="coinsText navbar-text">
                         {this.state.username ? "Hello " + this.state.username + "!" : "Please Login"}
                    </span>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="userProfileIcon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </div>
            </nav>
        );
    }
}

export default headingBar;