import React from 'react';
import './headingBar.css'
import {
    Link,
    withRouter
} from "react-router-dom";
import {logout, isAuthenticated} from '../auth/index'


const HeadingBar = ({ history }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logoDiv">
            <a className="logoDiv navbar-brand" href="/">
                <svg width="30" height="30" viewBox="0 0 16 16" className="mainLogo d-inline-block align-top" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                Commune
            </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link to="/">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </Link>
                {isAuthenticated() && 
                    <Link to="/profile">
                        <a className="nav-link" href="/profile">My Profile</a>
                    </Link>
                }

                {isAuthenticated() && 
                    <Link to="/dashboard">
                        <a className="nav-link" href="/profile">My Dashboard</a>
                    </Link>
                }

            </ul>
        </div>

        {!isAuthenticated() && (
            <div className="nav-link">
                <Link to='/register'>
                <button className="btn btn-light my-2 my-sm-0 border border-dark" type="submit">Register</button>
                </Link>
            </div>         
        )}

        {!isAuthenticated() && (
            <div className="nav-link">
                <Link to='/login'>
                <button className="btn btn-light my-2 my-sm-0 border border-dark" type="submit">Login</button>
                </Link>
            </div>
        )}

        {isAuthenticated() && (
            <div className="nav-link">
                <Link onClick={() => logout(() => {
                    history.push('/')
                })}>
                    <button className="btn btn-light my-2 my-sm-0 border border-dark" type="submit">Logout</button>
                </Link>
            </div>
        )}

        
    </nav>
);

export default withRouter(HeadingBar);