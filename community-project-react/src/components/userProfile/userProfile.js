
import React, { Component } from 'react';
import './userProfile.css';
// @ts-ignore
import profilePic from '../../resources/userProfile/default-user.jpg'
import "./sideBar.css"
import './sideBarNav.css'
import "./userInfo.css"
import {
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { isAuthenticated } from "../../auth/index";



const Profile = () => {
  const {
    user: { _id, name, email, address, balance, about, role }
  } = isAuthenticated();


  return (
      <div className="Profile-page">

        <div className="sidebar">
            <div className="card-body">
                <div className="sidebarnav">
                    <Link to='/'>
                        <h2 className="titles">Search for Jobs</h2>
                    </Link>
                </div>
                <div className="sidebarnav">
                    <Link to='/changeinfo'>
                        <h2 className="titles">Change Personal Information</h2>
                    </Link>
                </div>
        
                <div className="sidebarnav">
                    <Link to='/dashboard'>
                        <h2 className="titles">Dashboard</h2>
                    </Link>
                </div>
            </div>
        </div>


        <div className="userinfo">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Hello {name},</h5>
                    <p className="card-text">View or change your information.</p>
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
                                    <p>{name}</p>
                                    <p>{email}</p>
                                </blockquote>
                            </div>
                        </div>  
                        <div className="col-sm-6">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Address</h5>
                                    <p>{address}</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class='card'>
                <div class="card-body">
                    <h5 clas="card-title">Your Balance</h5>
                </div>
                <blockquote className="blockquote balance">
                    <h5>${balance}</h5>
                </blockquote>

            </div>

            <div class="card">
                <div class="card-body">
                    <h5 clas="card-title">Your Rating</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Feedback Ratings</h6>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-success btn-lg ">10</button>
                        <button type="button" class="btn btn-secondary btn-lg">3</button>
                        <button type="button" class="btn btn-danger btn-lg">0</button>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light btn-lg" disabled>Positive</button>
                        <button type="button" class="btn btn-light btn-lg" disabled>Neutral</button>
                        <button type="button" class="btn btn-light btn-lg" disabled>Negative</button>
                    </div>
                    
                </div>
            </div>

         

        </div>
        



        </div>
  )
}

export default Profile;