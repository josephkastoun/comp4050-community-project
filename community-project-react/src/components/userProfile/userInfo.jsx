import React from 'react'
import "./userInfo.css"
import "./changeContact.jsx"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function userInfo() {
    return (
        <div className="userinfo">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Hello Guest,</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card-group">
                <div className="card">
                    <div className="card-header">
                        Account Information
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Contact Information</h5>
                                    <p>Guest</p>
                                    <p>Guest123@gmail.com</p>
                                    <Link to="/changeContact">Change Contact Information</Link>
                                </blockquote>
                            </div>
                        </div>  
                        <div className="col-sm-6">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Address</h5>
                                    <p>123 sample st town</p>
                                    <a href="#" className="card-link">Change address</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Rating</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Feedback Ratings</h6>
                    <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success btn-lg">10</button>
                        <button type="button" className="btn btn-secondary btn-lg">3</button>
                        <button type="button" className="btn btn-danger btn-lg">0</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light btn-lg" disabled>Positive</button>
                        <button type="button" className="btn btn-light btn-lg" disabled>Neutral</button>
                        <button type="button" className="btn btn-light btn-lg" disabled>Negative</button>
                    </div>
                    
                </div>
            </div>

            <div className="card-header">
                Current Jobs
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <a href="#" className="card-link">Mow the lawn</a>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <a href="#" className="card-link">Fix the kitchen sink</a>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <a href="#" className="card-link">Replace lightbulb</a>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
            </div>

            

        </div>

        
    )
}

export default userInfo