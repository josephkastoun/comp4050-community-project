
import React, { Component } from 'react';
import './userProfile.css';
// @ts-ignore
import profilePic from '../../resources/userProfile/default-user.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './sideBar.jsx';
import UserInfo from './userInfo.jsx'



class UserProfile extends Component {
  render() {
    return (
      <div className="Profile-page">
        <Sidebar/>
        <UserInfo/>

        <div className="profilePicCard">
          <img src={profilePic} className="Profile-picture" alt="profilePic" />
          <div className="card-body">
            <h5 className="card-title">Guest</h5>
            <a href="#" className="btn btn-primary">Change Profile Picture</a>
          </div>
        </div>

        <div className="header">
          
        </div>


      </div>
    );
  }
}

export default UserProfile;