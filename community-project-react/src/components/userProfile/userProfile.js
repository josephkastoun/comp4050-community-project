
import React, { Component } from '../../../node_modules/react';
import './userProfile.css';
import profilePic from '../../resources/userProfile/default-user.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './sideBar';
import UserInfo from './userInfo'



class UserProfile extends Component {
  render() {
    return (
      <div className="Profile-page">
        <Sidebar/>
        <UserInfo/>

        <div class="profilePicCard">
          <img src={profilePic} className="Profile-picture" alt="profilePic" />
          <div class="card-body">
            <h5 class="card-title">Guest</h5>
            <a href="#" class="btn btn-primary">Change Profile Picture</a>
          </div>
        </div>

        <div className="header">
          
        </div>


      </div>
    );
  }
}

export default UserProfile;